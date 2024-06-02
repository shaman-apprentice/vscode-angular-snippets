import { commands, env, workspace, Uri, FileType } from "vscode";
import { getFolderTarget } from "../utils/path.helper";

export async function scaffoldComponentFolder() {
  console.debug("hi from scaffolding");

  await commands.executeCommand('copyFilePath');
  const target = await getFolderTarget();

  console.log(target)

  // see note below for parsing multiple files/folders
  // newUri = await vscode.Uri.file(folder);   
}
