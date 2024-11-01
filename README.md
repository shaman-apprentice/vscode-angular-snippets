# angular-snippets 

Adds snippet commands for Angular development. The active editor must be a TypeScript file for the commands to be active.

## Features

### component

`a-component` within *some.component.ts* will result in:

```ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: 'some.component.html',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class SomeComponent {}
```

`a-component-folder` will create a folder with prompted name, a component class as above and an empty html file

### directive

`a-directive` within *doIt.directive.ts* will result in:

```ts
import { Directive } from "@angular/core";

@Directive({
  selector: "[appDoIt]",
  standalone: true,
})
export class DoItDirective {}
```

### service

`a-service` within *butler.service.ts* will result in:

```ts
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ButlerService {}
```

### pipe

`a-pipe` within *pureHydrogen.pipe.ts* will result in:

```ts
import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
  name: 'appPureHydrogen',
  standalone: true,
})
export class PureHydrogenPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}
```

### jest

`a-jest` within *quickMath.calculator.test.ts* results in:
```ts
import { describe, expect, test } from "@jest/globals";

describe("quickMath.calculator", () => {
  test("quick math", () => {
    expect(2 + 2 - 1).toBe(3);
  });
});
```
