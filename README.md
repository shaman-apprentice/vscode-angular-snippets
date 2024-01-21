# angular-snippets 

Adds snippets for standalone Angular component and pipe.

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

### pipe

`a-pipe` within *some.pipe.ts* will result in:

```ts
import { Pipe, PipeTransform  } from '@angular/core';

@Pipe({
  name: 'some',
  standalone: true,
})
export class SomePipe implements PipeTransform {
  transform(value: unknown): unknown {
    return value;
  }
}

```
