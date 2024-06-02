import { window, SnippetString } from "vscode";
import { getFileName, toClassName, toComponentSelector } from "../utils/fileName.parser";
import { PrefixManager } from "../prefix.manager";

export function insertComponentTemplate() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const fileName = getFileName(editor);
  const prefix = PrefixManager.getPrefix();

	editor.insertSnippet(new SnippetString(
`import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "${toComponentSelector(fileName, prefix)}",
  templateUrl: "${fileName}.html",
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class ${toClassName(fileName)} {}
`
  ));
}
