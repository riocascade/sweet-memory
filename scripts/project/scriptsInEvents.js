


const scriptsInEvents = {

		async EventSheet1_Event34_Act2(runtime, localVars)
		{
			globalThis.parent.postMessage({message: 'level:'+runtime.globalVars("level")}, "*");
		},

		async EventSheet1_Event35_Act3(runtime, localVars)
		{
			globalThis.parent.postMessage({message: 'finish'}, "*");
		},

		async EventSheet1_Event36_Act2(runtime, localVars)
		{
			globalThis.parent.postMessage({message: 'finish'}, "*");
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

