import { window, SnippetString } from "vscode";
import { getFileName, toTestDescription } from "../utils/fileName.parser";

export function insertJestTemplate() {
  const editor = window.activeTextEditor;
  if (!editor) return;

  const fileName = getFileName(editor);

	editor.insertSnippet(new SnippetString(
`import { describe, expect, test } from "@jest/globals";

describe("${toTestDescription(fileName)}", () => {
  test("quick math", () => {
    expect(2 + 2 - 1).toBe(3);
  });
});
`
  ));
}
