import { Uri, commands, window, workspace } from "vscode";
import { buildUri, getFolderTarget } from "../utils/path.helper";
import { buildComponent } from "../utils/templates/component.generator";

export async function scaffoldComponentFolder() {
  console.debug("hi from scaffolding");

  
  // await workspace.fs.writeFile(
    //   buildUri(target.path, target.name + '.component.ts'),
    //   Buffer.from(buildComponent(target.name))
    // );
    
    const folderName = await window.showInputBox({ placeHolder: 'folder name' });
    if (!folderName)
      return;
    
  const target = await getFolderTarget();
  await workspace.fs.createDirectory(buildUri(target.path, folderName));

  console.log(folderName)
}

