HTTP/1.1 200 OK
Content-Language: en
P3P: CP='CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR'
Content-Type: application/javascript
Accept-Ranges: bytes
ETag: "101421669"
Last-Modified: Fri, 11 Aug 2017 08:09:35 GMT
Content-Length: 1336
Date: Sun, 07 Apr 2024 20:29:11 GMT
Server: lighttpd/1.4.28


/* RC4 */
function encRC4(uName, pwd)
{
	return textToBase64(rc4(uName, pwd));
}

function decRC4(uName, pwd)
{
	return rc4(uName,base64ToText(pwd));
}

var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

function textToBase64(t) {
 var r=''; var m=0; var a=0; var tl=t.length-1; var c
 for(n=0; n<=tl; n++) {
  c=t.charCodeAt(n)
  r+=tab.charAt((c << m | a) & 63)
  a = c >> (6-m)
  m+=2
  if(m==6 || n==tl) {
   r+=tab.charAt(a)
//   if((n%45)==44) {r+="\n"}
   m=0
   a=0
  }
 }
 return r
}

function base64ToText(t) {
 var r=''; var m=0; var a=0; var c
 for(n=0; n<t.length; n++) {
  c=tab.indexOf(t.charAt(n))
  if(c >= 0) {
   if(m) {
    r+=String.fromCharCode((c << (8-m))&255 | a)
   }
   a = c >> m
   m+=2
   if(m==8) { m=0 }
  }
 }
 return r
}


// RC4 stream encryption
// adapted from www.cpan.org crypt::rc4 -- thanks!
function rc4(key, text) {
 var i, x, y, t, x2, kl=key.length;
 s=[];

 for (i=0; i<256; i++) s[i]=i
 y=0
 x=kl; while(x--) {
  y=(key.charCodeAt(x) + s[x] + y) % 256
  t=s[x]; s[x]=s[y]; s[y]=t
 }
 x=0;  y=0;
 var z=""
 for (x=0; x<text.length; x++) {
  x2=x & 255
  y=( s[x2] + y) & 255
  t=s[x2]; s[x2]=s[y]; s[y]=t
  z+= String.fromCharCode((text.charCodeAt(x) ^ s[(s[x2] + s[y]) % 256]))
 }
 return z
}