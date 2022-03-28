import {
  ChangeDetectorRef,
  Directive,
  Host,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[bindingContext]',
})
export class SpreadDirective implements OnChanges {
  @Input() host: any;
  @Input() bindingContext: any;
  hostChangeDetectorRef: ChangeDetectorRef;
  constructor(@Host() injector: Injector) {
    this.hostChangeDetectorRef = injector.get(ChangeDetectorRef);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bindingContext']) {
      const newContext = changes['bindingContext'].currentValue;
      this.decorateProperties(newContext);
      const oldContext = changes['bindingContext'].previousValue;
      if (oldContext) {
        this.removeDecorators(oldContext);
      }
    }
  }

  private removeDecorators(oldContext: any) {
    Object.keys(oldContext).forEach((propertyKey) => {
      const valueKey = `____${propertyKey}____`;
      const value = oldContext[valueKey];
      delete oldContext[propertyKey];
      delete oldContext[valueKey];
      oldContext[propertyKey] = value;
    });
  }

  private decorateProperties(newContext: any) {
    Object.keys(newContext).forEach((propertyKey) => {
      const actualProperty = newContext[propertyKey];
      // perform initial set
      this.host[propertyKey] = actualProperty;

      // define custom property to push any future changes to the host
      const valueKey = `____${propertyKey}____`;
      newContext[valueKey] = actualProperty;
      // avoid JS this issues
      const that = this;
      Object.defineProperty(newContext, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function () {
          return newContext[valueKey];
        },
        set: function (value) {
          newContext[valueKey] = value;
          that.host[propertyKey] = value;
          that.hostChangeDetectorRef.detectChanges();
        },
      });
    });
  }
}
