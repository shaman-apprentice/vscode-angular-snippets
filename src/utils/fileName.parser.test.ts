import { describe, expect, test } from "@jest/globals";
import { toClassName, toComponentSelector, toDirectiveSelector, toPipeSelector, toTestDescription } from "./fileName.parser";

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
      ["hydrogen.pipe", "appHydrogen"],
      ["filterPureHydrogen.pipe", "appFilterPureHydrogen"],
      ["filter-pure-hydrogen.pipe", "appFilterPureHydrogen"],
    ])('"%s" becomes "%s"', (fileName, expectedClassName) => {
      expect(toPipeSelector(fileName)).toBe(expectedClassName);
    });
  })

  describe("toDirectiveSelector", () => {
    test.each([
      ["hydrogen.directive", "[appHydrogen]"],
      ["filterPureHydrogen.directive", "[appFilterPureHydrogen]"],
      ["filter-pure-hydrogen.directive", "[appFilterPureHydrogen]"],
    ])('"%s" becomes "%s"', (fileName, expectedSelector) => {
      expect(toDirectiveSelector(fileName)).toBe(expectedSelector);
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
