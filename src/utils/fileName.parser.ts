import type { TextEditor } from "vscode";
import { basename } from "path";

export function getFileName(editor: TextEditor): string {
  const fileName = basename(editor.document.fileName)
  return fileName.split('.').slice(0, -1).join('.');
}

export function toClassName(fileName: string): string {
  return getParts(fileName)
    .map(part => camelCase(part))
    .join("");
}

export function toComponentSelector(fileName: string, prefix = "app"): string {
  const parts = [prefix, ...getParts(fileName)];
  if (parts.at(-1) === "component") parts.pop();
  return parts.join("-");
}

export function toPipeSelector(fileName: string, prefix = "app"): string {
  const parts = getParts(fileName);
  if (parts.at(-1) === "pipe") parts.pop();
  return `${prefix}${parts
    .map(part => part[0].toLocaleUpperCase() + part.slice(1))
    .join("")}`;
}

export function toDirectiveSelector(fileName: string, prefix = "app"): string {
  const parts = getParts(fileName);
  if (parts.at(-1) === "directive") parts.pop();
  return `[${prefix}${parts
    .map(part => part[0].toLocaleUpperCase() + part.slice(1))
    .join("")}]`;
}

export function toTestDescription(fileName: string) {
  return fileName
    .replace(/\.test$/, "")
    .replace(/\.spec$/, "");
}

function camelCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getParts(fileName: string): string[] {
  const parts = fileName
    .replace(/[A-Z]/g, match => `.${match.toLowerCase()}`)
    .split(/[-.]/);
  return parts.filter(part => part.length);
}
