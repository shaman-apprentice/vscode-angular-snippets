import { commands, ExtensionContext } from "vscode";
import { PrefixManager } from "./prefix.manager";
import { insertServiceTemplate } from "./snippetCommands/serviceSnippet.command";
import { insertComponentTemplate } from "./snippetCommands/componentSnippet.command";
import { insertPipeTemplate } from "./snippetCommands/pipeSnippet.command";
import { insertJestTemplate } from "./snippetCommands/jestSnippet.command";
import { scaffoldComponentFolder } from "./snippetCommands/componentFolderScaffolding.command";

export async function activate(context: ExtensionContext) {	
	await PrefixManager.init();

	context.subscriptions.push(commands.registerCommand(
		'angular-snippets-by-shaman-apprentice.a-service', 
		insertServiceTemplate
	));
	context.subscriptions.push(commands.registerCommand(
		'angular-snippets-by-shaman-apprentice.a-component', 
		insertComponentTemplate
	));
	context.subscriptions.push(commands.registerCommand(
		'angular-snippets-by-shaman-apprentice.a-pipe', 
		insertPipeTemplate
	));
	context.subscriptions.push(commands.registerCommand(
		'angular-snippets-by-shaman-apprentice.a-jest', 
		insertJestTemplate
	));
	context.subscriptions.push(commands.registerCommand(
		'angular-snippets-by-shaman-apprentice.a-component-folder',
		scaffoldComponentFolder
	));

	console.debug('angular-snippets-by-shaman-apprentice is now active');
}

export function deactivate() {}
