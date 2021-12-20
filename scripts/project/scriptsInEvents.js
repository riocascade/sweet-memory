


const scriptsInEvents = {

		async EventSheet1_Event34_Act2(runtime, localVars)
		{
			window.parent.postMessage({message: 'level:'+runtime.globalVars["level"]}, "*");
		},

		async EventSheet1_Event35_Act3(runtime, localVars)
		{
			window.parent.postMessage({message: 'finish'}, "*");
		},

		async EventSheet1_Event36_Act2(runtime, localVars)
		{
			window.parent.postMessage({message: 'finish'}, "*");
		},

		async E_first_Event1_Act1(runtime, localVars)
		{
			window.addEventListener ("message", function (event) {
			if (event.data == "start_game") {
			runtime.globalVars["isstart"] = 1;
			}
			});
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

