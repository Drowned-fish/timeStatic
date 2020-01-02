import * as vscode from 'vscode';
import { format } from './format';

let startTime: number;
let endTime: number;
export function activate(context: vscode.ExtensionContext) {

	console.log('插件启动成功，开始计时');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		startTime = new Date().getTime();
	});
	context.subscriptions.push(disposable);

	let disposable2 = vscode.commands.registerCommand('extension.goodbye', () => {
		endTime = new Date().getTime() - startTime;
		let diff: string = format(endTime);
		console.log(diff);
	});

	context.subscriptions.push(disposable2);
}

export function deactivate() {}
