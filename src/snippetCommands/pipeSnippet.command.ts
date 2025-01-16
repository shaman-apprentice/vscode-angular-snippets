import { window, SnippetString } from "vscode";
import { getFileName, toClassName, toPipeSelector } from "../utils/fileName.parser";
import { PrefixManager } from "../prefix.manager";

export function insertPipeTemplate() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const fileName = getFileName(editor);
  const prefix = PrefixManager.getPrefix();

	editor.insertSnippet(new SnippetString(
`import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "${toPipeSelector(fileName, prefix)}",
})
export class ${toClassName(fileName)} implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
`
  ));
}
