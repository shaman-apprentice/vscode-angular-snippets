import { window, SnippetString } from "vscode";
import { getFileName } from "../utils/fileName.parser";
import { buildComponent } from "../utils/templates/component.generator";

export function insertComponentTemplate() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const fileName = getFileName(editor);
	editor.insertSnippet(new SnippetString(buildComponent(fileName)));
}
