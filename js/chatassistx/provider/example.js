(function(window) {
	var provider_name = "example";
	var version = "v0.1.0";

	if (typeof window.ChatAssistX.provider[provider_name] !== 'undefined') {
		console.log("Example provider is already loaded!");
	} else {
		console.log("Example provider is loading...");
		window.ChatAssistX.provider[provider_name] = {};
		window.ChatAssistX.provider[provider_name].connect = function(plugin_config) {
			// plugin_config에는 설정 json에서 지정했던 플러그인의 설정이 object로 넘어옵니다.
			// 이외 window.ChatAssistX로 채팅설정에 접근할 수 있습니다.
			// 정상적으로 초기화된 경우 true를, 이외의 경우 false를 리턴하면 됩니다.
			// window.ChatAssistX.provider[provider_name]에서 제공하는 함수를 이용 채팅을 출력하거나,
			// 직접 채팅을 출력할 수도 있습니다.
			// 특별한 경우가 아니라면 제공하는 함수를 이용하시는것을 권장드립니다.
		}
	}
})(window);
