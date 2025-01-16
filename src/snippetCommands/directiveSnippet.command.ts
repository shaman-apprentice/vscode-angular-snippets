import { window, SnippetString } from "vscode";
import { getFileName, toClassName, toDirectiveSelector } from "../utils/fileName.parser";
import { PrefixManager } from "../prefix.manager";

export function insertDirectiveTemplate() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const fileName = getFileName(editor);
  const prefix = PrefixManager.getPrefix();

	editor.insertSnippet(new SnippetString(
`import { Directive } from "@angular/core";

@Directive({
  selector: "${toDirectiveSelector(fileName, prefix)}",
})
export class ${toClassName(fileName)} {}
`
  ));
}
