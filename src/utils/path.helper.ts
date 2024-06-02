import { env, commands, Uri, window } from "vscode";
import { dirname, join } from "node:path";
import { stat } from "node:fs/promises"
import { EOL } from "node:os";

export async function getContainingFolder(): Promise<string> {
  await commands.executeCommand('copyFilePath');
  const activePath = await env.clipboard.readText();

  const selectedPaths = activePath.split(EOL);
  if (selectedPaths.length !== 1) // in case of focused multi selection in explorer > 1
    throw new Error("Could not resolve target folder. You must have an active text editor, or exactly one focused file/folder in the explorer");

  const origin = selectedPaths[0]
  const originStats = await stat(origin);
  return originStats.isDirectory()
    ? origin
    : dirname(origin);
}

export function buildUri(...paths: string[]): Uri {
  const fullPath = join(...paths);
  return Uri.file(fullPath);
}
