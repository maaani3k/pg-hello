function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	

}

function intro() {

	info =  'Hi, your personal data are below' + '\n' +
			'=====' + '\n' +
			'Name    : '     + '    Maciej     '     + '\n' + 
			'Surname : '  + '     Dyjak      ' + '\n' + 
			'Group ' + '     WZISS21212     ' + '\n' + 
			'Index number    : '     + '     192677     '     + '\n' + 
			'Semester   : '    + '    2nd     '     + '\n' + 
			'Subject : '  + '    Bogate aplikacje Internetowe'  + '\n';

	navigator.notification.alert(info);
	
}
