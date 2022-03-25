import {
  Attribute,
  Directive,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[libSpread]',
})
export class SpreadDirective implements DoCheck {
  @Input('libSpread') host: any;
  @Input('bindingContext') bindingContext: any;
  constructor() {}
  ngDoCheck(): void {
    if (this.host && this.bindingContext) {
      Object.keys(this.bindingContext).forEach(
        (item) => (this.host[item] = this.bindingContext[item])
      );
    }
  }
}
