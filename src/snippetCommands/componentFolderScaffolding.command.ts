import { window, workspace } from "vscode";
import { buildUri, getContainingFolder } from "../utils/path.helper";
import { buildComponent } from "../utils/templates/component.generator";

export async function scaffoldComponentFolder() { 
  try {
    const folder = await getContainingFolder();
    const componentName = await window.showInputBox({ placeHolder: `Enter component name - will be created in "${folder}"` });
    if (!componentName)
      return;

    await workspace.fs.createDirectory(buildUri(folder, componentName));
    await Promise.all([
      workspace.fs.writeFile(
        buildUri(folder, componentName, componentName + '.component.ts'),
        Buffer.from(buildComponent(componentName + '.component'))
      ),
      workspace.fs.writeFile(
        buildUri(folder, componentName, componentName + '.component.html'),
        Buffer.from('')
      )
    ]);

    console.log(`Successfully created component ${componentName}`);
  } catch (error) {
    console.error(error);
    if (error instanceof Error)
      window.showErrorMessage(error.message);
    else 
      window.showErrorMessage(String(error));
  }
}
