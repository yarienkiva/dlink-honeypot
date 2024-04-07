HTTP/1.1 200 OK
Content-Language: en
P3P: CP='CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR'
Content-Type: application/javascript
Accept-Ranges: bytes
ETag: "3421081642"
Last-Modified: Fri, 11 Aug 2017 08:09:35 GMT
Content-Length: 8464
Date: Sun, 07 Apr 2024 20:29:11 GMT
Server: lighttpd/1.4.28


(function($) {
	
	$.alerts = {
		
		alert: function(message, title, size ,callback) {
			if( title == null ) title = 'Alert';
			$.alerts._show(title, message, null, 'alert', size, '',function(result) {
				if( callback ) callback(result);
			});
		},
		
		alert2: function(message, title, size, id, callback) {
			if( title == null ) title = 'Alert';
			$.alerts._show(title, message, null, 'alert', size, id, function(result) {
				if( callback ) callback(result);
			});
		},
		
		confirm: function(size,message, title, id,callback) {
			if( title == null ) title = 'Confirm';
			$.alerts._show(title, message, null, 'confirm', size, id,function(result) {
				if( callback ) callback(result);
			});
		},
			
		prompt: function(message, value, title, callback) {
			if( title == null ) title = 'Prompt';
			$.alerts._show(title, message, value, 'prompt','', '',function(result) {
				if( callback ) callback(result);
			});
		},
		
		info: function(module_name,message, title, callback) {
			if( title == null ) title = 'Alert';
			$.alerts._show(title, message, null, 'info', 'INFO','','',function(result) {
				if( callback ) callback(result);
			});
		},
		
		// Private methods
		_show: function(title, msg, value, type, size, id, callback) {
			
			$.alerts._hide();
			$.alerts._create(size,id);
			
			var obj_name = (size=='XL')?"#alert_overlay_XL":"#alert_overlay";
			var alertObj=$(obj_name).overlay({oneInstance:false,expose: '#333333',api:true,closeOnClick:false,closeOnEsc:false});		

			alertObj.load();
			
			$("#popup_message").html(msg);
			
			switch( type ) {
				case 'alert':
					$("#confirm_tb").hide();
					$("#alert_tb").show();
					
					$("#alert_icon").removeClass('pop_error');
					$("#alert_icon").removeClass('pop_confirm');
					$("#alert_icon").removeClass('pop_ok');
						
					if(title==_T('_common','error'))
					{
						$("#alert_icon").addClass('pop_error');
					}
					else if(title==_T('_common','info'))
					{
						$("#alert_icon").addClass('pop_info');
					}	
					else
					{
						$("#alert_icon").addClass('pop_ok');
					}
					
					$("#popup_ok").click( function() {
						callback(true);
						alertObj.close();
					});
					
					$("#popup_ok2").click( function() {
						alertObj.close();
						if( callback ) callback(true);
					});
					
					$("#popup_cancel2").click( function() {
						alertObj.close();
					});
					break;
				case 'confirm':
					$("#alert_tb").hide();
					$("#confirm_tb").show();
						
					$("#alert_icon").removeClass('pop_error').removeClass('pop_confirm').removeClass('pop_ok').addClass('pop_confirm');
					
					$("#popup_ok2").click( function() {
						alertObj.close();
						if( callback ) callback(true);
					});
					$("#popup_cancel2").click( function() {
						alertObj.close();
						if( callback ) callback(false);
					});
					break;
				case 'prompt':

				break;
			}
		},
		_hide: function() {
			$("#alert_overlay").remove();
			$("#alert_overlay_XL").remove();
		},
		_create: function(size,id) {
			
			if(size=='XL')
			{
				var my_html = '<div class="alert_overlay_XL" id="alert_overlay_XL">';
					my_html += '<table border="0" cellspacing="0" cellpadding="0" width="550" height="180">' ;
					my_html += '<tr>';
					my_html += '<td colspan="2" align="center">';
					my_html += '<br>';
					my_html += '<table>';
					my_html += '<tr>';
					my_html += '<td style="padding-top:15px;width:50px">';					
					my_html += '<div id="alert_icon"></div></td>';
					my_html += '<td style="text-align: left;font-weight: bold;font-size: 9pt;padding-top:15px;" id="popup_message"></td>';
					my_html += '</tr>';
					my_html += '</table>';
					my_html += '</td>';
					my_html += '</tr>';
					my_html += '<td height="44">';
					my_html += '<div id="popup_button" align="right">';
					my_html += '<table width="97" id="alert_tb">';
					my_html += '<tr>';
					my_html += '<td><div class="button" id="popup_ok">'+ _T('_button','yes') +'</div></td>';
					my_html += '</tr>';
					my_html += '</table>';
					my_html += '<table width="97" id="confirm_tb">';
					my_html += '<tr>';
					
					if (id == "raid_roaming")
					{
						my_html += '<td><div class="button" id="popup_ok2">'+ _T('_button','Ok') + '</div></td>';
						my_html += '<td><div class="button" id="popup_cancel2">' + _T('_button','Skip') + '</div></td>';
					}
					else
					{
						my_html += '<td><div class="button" id="popup_ok2">'+ _T('_button','yes') + '</div></td>';
						my_html += '<td><div class="button" id="popup_cancel2">' + _T('_button','no') + '</div></td>';
					}
					my_html += '</tr>';
					my_html += '</table>';
					my_html += '</div>';
					my_html += '</td>';
					my_html += '</table>';
					my_html += '</div>';
					
					$("BODY").append(my_html);
			}
			else
			{
				var my_html = '<div class="alert_overlay" id="alert_overlay">';
					my_html += '<table border="0" cellspacing="0" cellpadding="0" width="460" height="155">';
					my_html += '<tr>';
					my_html += '<td colspan="2" align="center">';
					my_html += '<br>';
					my_html += '<table>';
					my_html += '<tr>';
					my_html += '<td style="padding-top:15px;width:50px">';
					my_html += '<div id="alert_icon"></div></td>';
					my_html += '<td style="text-align: left;font-weight: bold;font-size: 9pt;padding-top:15px;" id="popup_message"></td>';
					my_html += '</tr>';
					my_html += '</table>';
					my_html += '</td>';
					my_html += '</tr>';
					my_html += '<td height="44">';
					my_html += '<div id="popup_button" align="right">';
					my_html += '<table width="97" id="alert_tb">';
					my_html += '<tr>';
					if(id == "home_power_fail_keep")
					{
						my_html += '<td><div class="button" id="popup_ok2">'+ _T('_button','scan_disk') + '</div></td>';
						my_html += '<td><div class="button" id="popup_cancel2">' + _T('_button','Exit') + '</div></td>';
					}
					else if(id == "addon_ok_cancel")
					{
						my_html += '<td><div class="button_white" id="popup_ok2">'+ _T('_button','Ok') + '</div></td>';
						my_html += '<td><div class="button_white" id="popup_cancel2">' + _T('_button','Cancel') + '</div></td>';
					}
					else if(id == "close_button")
					{
						my_html += '<td><div class="button" id="popup_ok">' + _T('_button','close') +'</div></td>';
					}
					else
					{
						my_html += '<td><div class="button" id="popup_ok">' + _T('_button','yes') +'</div></td>';
					}
					my_html += '</tr>';
					my_html += '</table>';
					my_html += '<table width="97" id="confirm_tb">';
					my_html += '<tr>';
					if(id == "unlink_dropbox_confirm")
					{
						my_html += '<td><div class="button" id="popup_ok2">'+ _T('_button','apply') + '</div></td>';
						my_html += '<td><div class="button" id="popup_cancel2">' + _T('_button','Cancel') + '</div></td>';
					}				
					else if(id == "addon_ok_cancel2")
					{
						my_html += '<td><div class="button_white" id="popup_ok2">'+ _T('_button','Ok') + '</div></td>';
						my_html += '<td><div class="button_white" id="popup_cancel2">' + _T('_button','Cancel') + '</div></td>';
					}
					else
					{
						my_html += '<td><div class="button" id="popup_ok2">'+ _T('_button','yes') + '</div></td>';
						my_html += '<td><div class="button" id="popup_cancel2">' + _T('_button','no') + '</div></td>';
					}					
					my_html += '</tr>';
					my_html += '</table>';
					my_html += '</div>';
					my_html += '</td>';
					my_html += '</table>';
					my_html += '</div>';
					$("BODY").append(my_html);
			}
		}
	}
	
	// Shortuct functions
	jAlert = function(message, title, size ,callback) {
		$.alerts.alert(message, title, size ,callback);
	}
	
	jAlert2 = function(message, title, size, id, callback) {
		$.alerts.alert2(message, title, size, id, callback);
	}
	
	jConfirm = function(size, message, title, id, callback) {
		
		//set default value, alpha.eve 2012/11/23 
		size = size || "";
		message = message || "";
		title = title || "";
   		
   		if( typeof(callback) == 'undefined') 
   		{
   			callback = id;
   			id="";
   		}	
   		
		$.alerts.confirm(size, message, title, id, callback);
	};
		
	jPrompt = function(message, value, title, callback) {
		$.alerts.prompt(message, value, title, callback);
	};
	
})(jQuery);