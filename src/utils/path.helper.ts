import { env, commands} from "vscode";
import { dirname, sep } from "node:path";
import { stat } from "node:fs/promises"

// async function isDirectory(uri: Uri): Promise<boolean> {
//   const pathStats = await workspace.fs.stat(uri);
//   return pathStats.type === FileType.Directory;
// }

export type FolderTarget = {
  path: string;
  name: string;
}

export async function getFolderTarget(): Promise<FolderTarget> {
  await commands.executeCommand('copyFilePath');
  const activePath = await env.clipboard.readText();
  const path = await getFolderPath(activePath);
  return {
    path,
    name: path.split(sep).pop()!
  }
}

async function getFolderPath(path: string) {
  const pathStats = await stat(path);
  return pathStats.isDirectory()
    ? path
    : dirname(path);
}
