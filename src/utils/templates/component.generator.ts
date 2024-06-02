import { PrefixManager } from "../../prefix.manager";
import { toClassName, toComponentSelector } from "../fileName.parser";

// todo Component class suffix
// todo component in html templateUrl
export function buildComponent(fileName: string) {
  const prefix = PrefixManager.getPrefix();
  
  return `import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "${toComponentSelector(fileName, prefix)}",
  templateUrl: "${fileName}.html",
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class ${toClassName(fileName)} {}
`;
}
