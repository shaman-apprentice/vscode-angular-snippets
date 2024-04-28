import { workspace, window } from "vscode";
import { readFile } from "fs/promises";
import { join as joinPath } from "path";

export async function getPrefix(): Promise<string> {
  try {
    const angularConfig = await readAngularJsonConfig();
    const projects = Object.entries(angularConfig.projects);
    if (projects.length > 1) 
      console.warn("There are more than one project in your angular.json; will default to first entry as prefix.");
    
    const project = projects[0][1];
    return project.prefix ?? "app";
  } catch(error) {
    window.showWarningMessage("Extension angular-snippets-by-shaman-apprentice couldn't parse angular.json at project root - defaulting to \"app\": " + error);
    return "app";
  }
}

function readAngularJsonConfig(): Promise<AngularConfig> {
  const workspaceFolder = workspace.workspaceFolders![0].uri.fsPath;
  const angularJsonPath = joinPath(workspaceFolder, "angular.json");
  return readFile(angularJsonPath, "utf8").then(v => JSON.parse(v));
}


type AngularConfig = {
  projects: {
    [name: string]: AngularProject;
  };
};

type AngularProject = {
  prefix: string;
};
