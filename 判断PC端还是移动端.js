function isPc () {
	var userAgentInfo = navigator.userAgent;
	var agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
	var flag = true;
	for (var i=0; i<agents.length; i++) {
		if (userAgentInfo.indexOf(agents[i]) > 0) {
			flag = true;
			break;
		}
	}
	return flag;
}