(function(window) {
	var plugin_name = "example";

	if (typeof window.ChatAssistX.plugins[plugin_name] !== 'undefined') {
		console.log("Example plugin is already loaded!");
	} else {
		console.log("Example plugin is loaded");
		window.ChatAssistX.plugins[plugin_name] = {};
		window.ChatAssistX.plugins[plugin_name].process = function(args, config) {
			// 채팅 메세지 처리 함수입니다.
			// 제공되는 값은 다음과 같습니다.
			// args.message 채팅 메세지 본문
			// args.nickname 닉네임
			// args.platform 플랫폼명
			// args.isStreamer 스트리머 여부
			// args.isMod 모더레이터 여부(TAPIC 이외 항상 false)
			// config 설정 json 파일의 플러그인 설정에 지정한 값
			//
			// 처리된 메세지를 반환하거나, 메세지가 변경되지 않은 경우 false를 반환할 수 있습니다.
		}
		
		window.ChatAssistX.plugins[plugin_name].init = function(config) {
			// 플러그인 초기화 함수입니다.
			// config으로 설정 json 파일에 지정한 플러그인 설정값이 넘어옵니다.
			// 플러그인 초기화에 필요한 작업을 마친 뒤 성공은 true, 실패는 false를 반환합니다.
			return true;
		}
	}
})(window);
