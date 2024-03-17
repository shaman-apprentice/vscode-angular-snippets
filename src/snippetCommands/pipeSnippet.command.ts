import { window, SnippetString } from "vscode";
import { getFileName, toClassName, toPipeSelector } from "../utils/fileName.parser";

export function insertPipeTemplate() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const fileName = getFileName(editor);

	editor.insertSnippet(new SnippetString(
`import {  Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "${toPipeSelector(fileName)}",
  standalone: true,
})
export class ${toClassName(fileName)} implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
`
  ));
}
