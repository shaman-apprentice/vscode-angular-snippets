import { env, commands, workspace, Uri } from "vscode";
import { dirname, sep, join } from "node:path";
import { stat } from "node:fs/promises"

type FolderTarget = {
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

export function buildUri(path: string, fileName: string): Uri {
  const fullPath = join(path, fileName);
  return Uri.file(fullPath);
}

async function getFolderPath(path: string) {
  const pathStats = await stat(path);
  return pathStats.isDirectory()
    ? path
    : dirname(path);
}
