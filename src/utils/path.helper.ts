import { env, commands, Uri } from "vscode";
import { dirname, join } from "node:path";
import { stat } from "node:fs/promises"

export async function getContainingFolder(): Promise<string> {
  await commands.executeCommand('copyFilePath');
  const activePath = await env.clipboard.readText();
  const activePathStats = await stat(activePath);
  return activePathStats.isDirectory()
    ? activePath
    : dirname(activePath);
}

export function buildUri(...paths: string[]): Uri {
  const fullPath = join(...paths);
  return Uri.file(fullPath);
}
