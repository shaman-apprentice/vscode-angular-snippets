import { getPrefix } from "./angularConfigReader";

export class PrefixManager {
  private static prefix: string = "app";

  static async init() {
    PrefixManager.prefix = await getPrefix();
  }

  static getPrefix(): string {
    return PrefixManager.prefix;
  }
}
