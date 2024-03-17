import { describe, expect, test } from "@jest/globals";
import { toClassName, toComponentSelector, toPipeSelector, toTestDescription } from "./fileName.parser";

describe("fileName.parser", () => {
  describe("toClassName", () => {
    test.each([
      ["a.component", "AComponent"],
      ["my.widget.component", "MyWidgetComponent"],
      ["my-widget.component", "MyWidgetComponent"],
      ["myWidget.component", "MyWidgetComponent"],
      ["mySpecialWidget.component", "MySpecialWidgetComponent"],
      ["butler.service", "ButlerService"],
    ])('"%s" becomes "%s"', (fileName, expectedClassName) => {
      expect(toClassName(fileName)).toBe(expectedClassName);
    });
  });

  describe("toComponentSelector", () => {
    test.each([
      ["a.component", "app-a"],
      ["my.widget.component", "app-my-widget"],
      ["my-widget.component", "app-my-widget"],
      ["myWidget.component", "app-my-widget"],
      ["mySpecialWidget.component", "app-my-special-widget"],
    ])('"%s" becomes "%s"', (fileName, expectedClassName) => {
      expect(toComponentSelector(fileName)).toBe(expectedClassName);
    });
  })

  describe("toPipeSelector", () => {
    test.each([
      ["hydrogen.pipe", "hydrogen"],
      ["filterPureHydrogen.pipe", "filterPureHydrogen"],
      ["filter-pure-hydrogen.pipe", "filterPureHydrogen"],
    ])('"%s" becomes "%s"', (fileName, expectedClassName) => {
      expect(toPipeSelector(fileName)).toBe(expectedClassName);
    });
  })

  describe("toTestDescription", () => {
    test.each([
      ["alarm.test", "alarm"],
      ["alarm.spec", "alarm"],
    ])('"%s" becomes "%s"', (fileName, expectedClassName) => {
      expect(toTestDescription(fileName)).toBe(expectedClassName);
    });
  })
});
