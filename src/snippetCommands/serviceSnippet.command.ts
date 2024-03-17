import { window, SnippetString } from "vscode";
import { getFileName, toClassName } from "../utils/fileName.parser";

export function insertServiceTemplate() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const fileName = getFileName(editor);

	editor.insertSnippet(new SnippetString(
`import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ${toClassName(fileName)} {}
`
  ));
}
