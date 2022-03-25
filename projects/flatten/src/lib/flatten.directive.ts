import { Directive, DoCheck, Input } from '@angular/core';

@Directive({
  selector: '[libSpread]',
})
export class SpreadDirective implements DoCheck {
  @Input('libSpread') host: any;
  @Input('bindingContext') bindingContext: any;
  constructor() {}
  ngDoCheck(): void {
    if (this.host && this.bindingContext) {
      Object.apply(this.host, this.bindingContext);
    }
  }
}
