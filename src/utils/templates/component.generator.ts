import { PrefixManager } from "../../prefix.manager";
import { toClassName, toComponentSelector } from "../fileName.parser";

/** @param fileName basename without file extension */
export function buildComponent(fileName: string) {
  const prefix = PrefixManager.getPrefix();
  
  return `import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "${toComponentSelector(fileName, prefix)}",
  templateUrl: "${fileName}.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ${toClassName(fileName)} {}
`;
}
