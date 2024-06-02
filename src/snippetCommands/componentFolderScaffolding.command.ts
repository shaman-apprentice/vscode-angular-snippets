import { commands, env, workspace, Uri, FileType } from "vscode";
import { buildUri, getFolderTarget } from "../utils/path.helper";
import { buildComponent } from "../utils/templates/component.generator";

export async function scaffoldComponentFolder() {
  console.debug("hi from scaffolding");

  await commands.executeCommand('copyFilePath');
  const target = await getFolderTarget();

  await workspace.fs.writeFile(
    buildUri(target.path, target.name + '.component.ts'),
    Buffer.from(buildComponent(target.name))
  );

  // await vscode.window.showInputBox({ placeHolder: 'folder name' });

  console.log(target)
}

