HTTP/1.1 200 OK
Content-Language: en
P3P: CP='CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR'
Content-Type: application/javascript
Accept-Ranges: bytes
ETag: "1449483886"
Last-Modified: Fri, 14 Sep 2012 01:32:42 GMT
Content-Length: 19702
Date: Mon, 15 Apr 2024 22:04:23 GMT
Server: lighttpd/1.4.28

var SEL_PATH="";

$(function(){

	$('._text').each(function(){							
		var str = _T($(this).attr('lang'),$(this).attr('datafld'));		
							
		if (str != "")
		{
			$(this).empty();
				$(this).html(str);
		}
	});
});

function initDiag(url)
{
	$.get(url,function(data){
		
		//$("#diagFrame").append(data);
		$("body").append(data);
    });
}

function load_help(url)
{
	document.getElementById('helpFrame').src =url;
}

var BANNER_NAME = new Array();
var _WIZARD_MENU="",_DISK_MENU="",_ACCOUNT_MENU="";
var _NETWORK_MENU="",_APP_MENU="",_SYS_MENU="";
var _SYS_MAIL_MENU="",_STATUS_MENU="";

function menu_init()
{
	BANNER_NAME = new Array (
_T('_menu_title','wizard'),			//Text:Setup Wizard
_T('_menu_title','disk'),			//Text:Disk Management
_T('_menu_title','account'),		//Text:Account Management
_T('_menu_title','network'),		//Text:Network Management
_T('_menu_title','app'),			//Text:Application Management
_T('_menu_title','system'),			//Text:System Management
_T('_menu_title','status'));		//Text:System Status

	_WIZARD_MENU= '<li><div class="sidenavoff">&nbsp;&nbsp;&nbsp;'+ _T('_menu','wizard') + '</div>'
	_WIZARD_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_WIZARD_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_WIZARD_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_WIZARD_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_WIZARD_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_WIZARD_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	
	_DISK_MENU= '<li><div id="m_1" class="sidenavoff" rel="/web/dsk_mgr/hd_config.html" src="help_raid.html">&nbsp;&nbsp;&nbsp;'+_T('_menu','format') + '</div>'
	_DISK_MENU+= '<li><div id="m_2" rel="/web/dsk_mgr/hd_smart.html" src="help_smart.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','smart') + '</div>'
	_DISK_MENU+= '<li><div id="m_3" rel="/web/dsk_mgr/hd_scandisk_setting.html" src="help_scan_disk.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','disk') + '</div>'
	if(VE_FUNCTION)
	_DISK_MENU+= '<li><div id="m_4" rel="/web/dsk_mgr/hd_ve_setting.html" src="help_ve.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','volume_encryption') + '</div>'
	_DISK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_DISK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_DISK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	
	_ACCOUNT_MENU= '<li><div id="m_1" class="sidenavoff" rel="/web/account_mgr/account.html" src="help_account.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','user') + '</div></li>'
	_ACCOUNT_MENU+= '<li><div id="m_2" rel="/web/account_mgr/quota.html" src="help_quota.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','quota') + '</div></li>'
	_ACCOUNT_MENU+= '<li><div id="m_3" rel="/web/account_mgr/network_access.html" src="help_network_access.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','network') + '</div></li>'
	_ACCOUNT_MENU+= '<li><div id="m_4" rel="/web/account_mgr/admin.html" src="help_admin.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','admin') + '</div></li>'
	if(ADS_FUNCTION)
	_ACCOUNT_MENU+= '<li><div id="m_5" rel="/web/account_mgr/ads.html" src="help_ads.html">&nbsp;&nbsp;&nbsp;' + _T('_menu','ads') + '</div></li>'
	
	if(DFS_FUNCTION)
	_ACCOUNT_MENU+= '<li><div id="m_6" rel="/web/account_mgr/dfs.html" src="help_dfs.html">&nbsp;&nbsp;&nbsp;' + _T('_menu','dfs') + '</div></li>'
	_ACCOUNT_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div></li>'

	_NETWORK_MENU= '<li><div id="m_1" class="sidenavoff" rel="/web/network_mgr/ip.html" src="help_ip.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','lan') + '</div>'
	_NETWORK_MENU+= '<li><div id="m_2" rel="/web/network_mgr/ddns.html" src="help_ddns.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','ddns') + '</div>'
	_NETWORK_MENU+= '<li><div id="m_3" rel="/web/network_mgr/portforwarding.html" src="help_portforwarding.html">&nbsp;&nbsp;&nbsp;' + _T('_menu','forwarding') + '</div>'
	_NETWORK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_NETWORK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_NETWORK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_NETWORK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_NETWORK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_NETWORK_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	
	_APP_MENU = '<li><div id="m_1" class="sidenavoff" rel="/web/app_mgr/ftp_setting.html" src="help_ftp.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','ftp') + '</div>'
	_APP_MENU+= '<li><div id="m_2" rel="/web/app_mgr/upnp_setting.html" src="help_upnpav.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','upnp') + '</div>'
	_APP_MENU+= '<li><div id="m_3" rel="/web/app_mgr/itunes_setting.html" src="help_itunes.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','itunes') + '</div>'
	if(ADDON_FUNCTION)
	_APP_MENU+= '<li><div id="m_4" rel="/web/app_mgr/module.html" src="help_add_ons.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','addon') + '</div>'
	_APP_MENU+= '<li><div id="m_5" rel="/web/account_mgr/afp.html" src="help_afp.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','afp') + '</div>'
	_APP_MENU+= '<li><div id="m_6" rel="/web/account_mgr/nfs.html" src="help_nfs.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','nfs') + '</div>'
	_APP_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'

	_SYS_MENU = '<li><div id="m_1" class="sidenavoff" rel="/web/system_mgr/language.html" src="help_language.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','language') + '</div>'
	_SYS_MENU+= '<li><div id="m_2" rel="/web/system_mgr/time.html" src="help_time.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','time') + '</div>'
	_SYS_MENU+= '<li><div id="m_3" rel="/web/system_mgr/device.html" src="help_device.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','device') + '</div>'
	_SYS_MENU+= '<li><div id="m_4" rel="/web/system_mgr/system.html" src="help_system.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','system') + '</div>'
	_SYS_MENU+= '<li><div id="m_5" rel="/web/system_mgr/power_mgr.html" src="help_power.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','power') + '</div>'
	_SYS_MENU+= '<li><div id="m_6" rel="/web/system_mgr/mail.html" src="help_mail.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','email') + '</div>'
	_SYS_MENU+= '<li><div id="m_7" rel="/web/system_mgr/log.html" src="help_log.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','logs') + '</div>'
	_SYS_MENU+= '<li><div id="m_8" rel="/web/system_mgr/firmware.html" src="help_firmware.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','firmware') + '</div>'
	if(SNMP_FUNCTION)
	_SYS_MENU+= '<li><div id="m_9" rel="/web/system_mgr/snmp.html" src="help_snmp.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','snmp') + '</div>'
	_SYS_MENU+= '<li><div id="m_10" rel="/web/system_mgr/usb_device.html" src="help_usb_device.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','usb_device') + '</div>'

	_SYS_MAIL_MENU = '<li><div id="m_1" rel="/web/system_mgr/language.html" src="help_language.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','language') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_2" rel="/web/system_mgr/time.html" src="help_time.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','time') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_3" rel="/web/system_mgr/device.html" src="help_device.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','device') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_4" rel="/web/system_mgr/system.html" src="help_system.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','system') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_5" rel="/web/system_mgr/power_mgr.html" src="help_power.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','power') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_6" class="sidenavoff" rel="/web/system_mgr/mail.html" src="help_mail.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','email') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_7" rel="/web/system_mgr/log.html" src="help_log.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','logs') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_8" rel="/web/system_mgr/firmware.html" src="help_firmware.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','firmware') + '</div>'
	if(SNMP_FUNCTION)
	_SYS_MAIL_MENU+= '<li><div id="m_9" rel="/web/system_mgr/snmp.html" src="help_snmp.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','snmp') + '</div>'
	_SYS_MAIL_MENU+= '<li><div id="m_10" rel="/web/system_mgr/usb_device.html" src="help_usb_device.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','usb_device') + '</div>'

	_STATUS_MENU = '<li><div id="m_1" class="sidenavoff" rel="/web/status_mgr/system_info.html" src="help_sys_info.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','system_info') + '</div>'
	_STATUS_MENU+= '<li><div id="m_2" rel="/web/status_mgr/hd_info.html" src="help_hd_info.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','hard_drive_info') + '</div>'
    _STATUS_MENU+= '<li><div id="m_3" rel="/web/status_mgr/resource_info.html" src="help_resource_monitor.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','resource_monitor') + '</div>'
	_STATUS_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_STATUS_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_STATUS_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_STATUS_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	_STATUS_MENU+= '<li><div>&nbsp;&nbsp;&nbsp;</div>'
	
	_SYS_LOG_MENU = '<li><div id="m_1" rel="/web/system_mgr/language.html" src="help_language.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','language') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_2" rel="/web/system_mgr/time.html" src="help_time.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','time') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_3" rel="/web/system_mgr/device.html" src="help_device.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','device') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_4" rel="/web/system_mgr/system.html" src="help_system.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','system') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_5" rel="/web/system_mgr/power_mgr.html" src="help_power.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','power') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_6" rel="/web/system_mgr/mail.html" src="help_mail.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','email') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_7" class="sidenavoff" rel="/web/system_mgr/log.html" src="help_log.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','logs') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_8" rel="/web/system_mgr/firmware.html" src="help_firmware.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','firmware') + '</div>'
	if(SNMP_FUNCTION)
	_SYS_LOG_MENU+= '<li><div id="m_9" rel="/web/system_mgr/snmp.html" src="help_snmp.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','snmp') + '</div>'
	_SYS_LOG_MENU+= '<li><div id="m_10" rel="/web/system_mgr/usb_device.html" src="help_usb_device.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','usb_device') + '</div>'
}
function page_init(page_id)
{
	menu_init();
		
	var menu="";
	var help_url="",frame_url="";
	var icon_url="",icon_id="";
	var title_div="";
	
	unselect_main_menu();

	switch(page_id)
	{
		case 'wizard':
				menu=_WIZARD_MENU;
				help_url = "/web/help/help_wizard.html";
				frame_url = "/web/wizard_mgr/wizard.html";
				icon_url = 'url(/web/images/management/s_wizard_on.png)';
				icon_id = '#icon_wizard';
				title_div = BANNER_NAME[0];
				break;
		case 'disk':
				menu=_DISK_MENU;
				help_url = "/web/help/help_raid.html";
				frame_url = "/web/dsk_mgr/hd_config.html";
				icon_url = 'url(/web/images/management/s_disk_on.png)';
				icon_id = '#icon_disk';
				title_div = BANNER_NAME[1];
				break;
		case 'disk_sync':
				menu=_DISK_MENU;
				help_url = "/web/help/help_raid.html";
				frame_url = "/web/dsk_mgr/hd_config.html";
				icon_url = 'url(/web/images/management/s_disk_on.png)';
				icon_id = '#icon_disk';
				title_div = BANNER_NAME[1];
				break;		
		case 'disk_state':
				menu=_DISK_MENU;
				help_url = "/web/help/help_raid.html";
				frame_url = "/web/dsk_mgr/hd_config_state.html";
				icon_url = 'url(/web/images/management/s_disk_on.png)';
				icon_id = '#icon_disk';
				title_div = BANNER_NAME[1];
				break;	
		case 'disk_ok':
				menu=_DISK_MENU;
				help_url = "/web/help/help_raid.html";
				frame_url = "/web/dsk_mgr/hd_config_ok.html";
				icon_url = 'url(/web/images/management/s_disk_on.png)';
				icon_id = '#icon_disk';
				title_div = BANNER_NAME[1];
				break;						
		case 'account':
				menu=_ACCOUNT_MENU;
				help_url = "/web/help/help_account.html";
				frame_url = "/web/account_mgr/account.html";
				icon_url = 'url(/web/images/management/s_account_on.png)';
				icon_id = '#icon_account';
				title_div = BANNER_NAME[2];
				break;
		case 'network':
				menu=_NETWORK_MENU;
				help_url = "/web/help/help_ip.html";
				frame_url = "/web/network_mgr/ip.html";
				icon_url = 'url(/web/images/management/s_network_on.png)';
				icon_id = '#icon_network';	
				title_div = BANNER_NAME[3];
				break;	
		case 'app':
				menu=_APP_MENU;
				help_url = "/web/help/help_ftp.html";
				frame_url = "/web/app_mgr/ftp_setting.html";
				icon_url = 'url(/web/images/management/s_app_on.png)';
				icon_id = '#icon_app';		
				title_div = BANNER_NAME[4];	
				break;
		case 'apkg':
				_APP_MENU_APKG = '<li><div id="m_1" rel="/web/app_mgr/ftp_setting.html" src="help_ftp.html">&nbsp;&nbsp;&nbsp;' + _T('_menu','ftp') + '</div>'
				_APP_MENU_APKG += '<li><div id="m_2" rel="/web/app_mgr/upnp_setting.html" src="help_upnpav.html">&nbsp;&nbsp;&nbsp;' + _T('_menu','upnp') + '</div>'
				_APP_MENU_APKG += '<li><div id="m_3" rel="/web/app_mgr/itunes_setting.html" src="help_itunes.html">&nbsp;&nbsp;&nbsp;' + _T('_menu','itunes') + '</div>'
				_APP_MENU_APKG += '<li><div id="m_4" class="sidenavoff" rel="/web/app_mgr/module.html" src="help_add_ons.html">&nbsp;&nbsp;&nbsp;'  + _T('_menu','addon') + '</div>'
				_APP_MENU_APKG += '<li><div id="m_5" rel="/web/account_mgr/afp.html" src="help_afp.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','afp') + '</div>'
				_APP_MENU_APKG += '<li><div id="m_6" rel="/web/account_mgr/nfs.html" src="help_nfs.html">&nbsp;&nbsp;&nbsp;'+ _T('_menu','nfs') + '</div>'
				_APP_MENU_APKG += '<li><div>&nbsp;&nbsp;&nbsp;</div>'
				menu=_APP_MENU_APKG ;
				help_url = "/web/help/help_add_ons.html";
				frame_url = "/web/app_mgr/module.html";
				icon_url = 'url(/web/images/management/s_app_on.png)';
				icon_id = '#icon_app';
				title_div = BANNER_NAME[4];
				break;		
		case 'system':
				menu=_SYS_MENU;
				help_url = "/web/help/help_language.html";
				frame_url = "/web/system_mgr/language.html";
				icon_url = 'url(/web/images/management/s_sys_on.png)';
				icon_id = '#icon_sys';			
				title_div = BANNER_NAME[5];		
				break;
		case 'mail':
				menu=_SYS_MAIL_MENU;
				help_url = "/web/help/help_mail.html";
				frame_url = "/web/system_mgr/mail.html";
				icon_url = 'url(/web/images/management/s_sys_on.png)';
				icon_id = '#icon_sys';			
				title_div = BANNER_NAME[5];		
				break;		
		case 'status':
				menu = _STATUS_MENU;
				help_url = "/web/help/help_sys_info.html";
				frame_url = "/web/status_mgr/system_info.html";
				icon_url = 'url(/web/images/management/s_status_on.png)';
				icon_id = '#icon_status';	
				title_div = BANNER_NAME[5];
				break;
		case 'log':
				menu = _SYS_LOG_MENU;
				help_url = "/web/help/help_log.html";
				frame_url = "/web/system_mgr/log.html";
				icon_url = 'url(/web/images/management/s_sys_on.png)';
				icon_id = '#icon_sys';	
				title_div = BANNER_NAME[6];
				break;
		default:
				menu = _STATUS_MENU;
				help_url = "/web/help/help_sys_info.html";
				frame_url = "/web/status_mgr/system_info.html";
				icon_url = 'url(/web/images/management/s_status_on.png)';
				icon_id = '#icon_status';	
				title_div = BANNER_NAME[6];
				break;
	}
	
	$(icon_id).css('backgroundImage',icon_url);
	$(icon_id).css('color','#ffffff');
	$('#menu_container').html(menu);
	$('#title_div').html(title_div);
	
	document.getElementById('mainFrame').src =frame_url;
	load_help(help_url);
	link_url();
}

function link_url()
{
	$("#menu_container li div").click(function(){
		
		var f = init();
		if (f == "fail")
		{
			jAlert( _T('_login','msg5'), _T('_common','error'));
			
			$("#popup_ok").click( function (){
				location.replace("/web/login.html");
			});
			
			return false;
		}
	
		var u = mainFrame.location.href;
		
		var _ID = $(this).attr("id");
		var	_REL = $(this).attr("rel");
		var	_SRC = $(this).attr("src");
		if(!_SRC) return;	//fish20120105+ for null src
		
		//if(u.indexOf("device.html")!=-1 && mainFrame.chk_setting()==1)
		if(_SRC.indexOf("/device.html")!=-1 && mainFrame.chk_setting()==1)
		{
			var flag=0;
			jConfirm('M',_T('_common','save_msg'),_T('_common','message'),function(r){	//Text:Save your new settings?
				if(r)
				{
					mainFrame.set_device();
				}
				else
				{
					go_to(_ID,_REL,_SRC);
				}
			});
			
			return;
		}
		else
		{
			go_to(_ID,_REL,_SRC);
		}

		function go_to(id,url,src)
		{
			if(id == "") return;
			switch(id)
			{
				case "audiostreamer_set":	//for apkg/audiostreamer and other apkg gui
				case "audiostreamer_playlist":
				case "apkg":
					unselect_item();
					$('#' + id).addClass("sidenavoff");
					document.getElementById('mainFrame').src =url;
					load_help(src);
				break;
				
				default:
					unselect_item();
					$('#' + id).addClass("sidenavoff");
					document.getElementById('mainFrame').src =url;
					load_help("/web/help/"+src);
				break;
			}//end of switch(id)
		}//end of  function go_to(id,url,src)

	});
	
	function unselect_item()
	{
		$("#menu_container li div").each(function() {
			var id2 = $(this).attr("id");
			if(id2!="")
				$('#' + id2).removeClass("sidenavoff");
		});
	}
}

function unselect_main_menu()
{
	$("#main_menu ul li").each(function() {
		var id = $(this).attr("id");
		var tmp_id = id;
		if(id!="")
		{
			id = id.split("_");
			var url = 'url(/web/images/management/' + 's_' + id[1] +'_off.png)'
			$('#' + tmp_id).css('backgroundImage',url);
			$('#' + tmp_id).css('color','#000000');
		}
	});
}

function _T(c,id)
{
	var str;
	var find = false;

	$(XML_LANGUAGE).find(c).each(function(){ 							
			str = $(this).find(id).text()	 	 										 						 						
			if (str != "")
						find = true;	
			return false;		 						 												
	});

	if (find == false)
	{			
			$(XML_LANGUAGE_EN).find(c).each(function(){ 											
			str = $(this).find(id).text()				
			return false;						
	});				
	}
	return str;
}

function _Info(id)
{
	var str;
	$(XML_INFO).find('info').each(function(){ 							
			str = $(this).find(id).text()	 	 										 						 						
			return false; 						
	});				
	return str;
}

var XML_LANGUAGE_EN;
var XML_LANGUAGE;
var XML_INFO;
function replace_text()
{
	$('._text').each(function(){							
		var str = _T($(this).attr('lang'),$(this).attr('datafld'));		

		if (str != "")
		{
			$(this).empty();
				$(this).html(str);
		}
	});
	
	parent.$('#title_div').html(_T('_menu_title','system'));//Text:System Management
	
	menu_init();
	
	$('#menu_container').html(_SYS_MENU);
	
	link_url();
	
	document.getElementById('helpFrame').src ="/web/help/help_language.html";

}
function load_language()
{
	$.ajax({
	    type: "GET",
		url: "/xml/lang.xml",
		dataType: "xml",
		async: false,
		cache: false,
		error:function(){					
		},									
		success: function(xml) {
			XML_LANGUAGE=xml;
		}
	});	
}	
function load_en_language()
{
	$.ajax({
	    type: "GET",
		url: "/xml/english.xml",
		dataType: "xml",
		async: false,
		cache: false,
		error:function(){					
		},									
		success: function(xml) {
			XML_LANGUAGE_EN=xml;
		}
	});	
}	
function load_info()
{	
$.ajax({
	    type: "GET",
		url: "/xml/info.xml",
		dataType: "xml",
		async: false,
		cache: false,
		error:function(){					
		},															
		success: function(xml) {				
 					XML_INFO = xml;					
		}		
	});		
}	
load_en_language();
load_language();
load_info();
document.title = _Info('device');	