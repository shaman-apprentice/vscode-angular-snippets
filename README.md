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
  styleUrl: 'some.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class SomeComponent {}
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
  name: 'pureHydrogen',
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
