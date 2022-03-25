import {
  ChangeDetectorRef,
  Directive,
  DoCheck,
  Host,
  Injector,
  Input,
} from '@angular/core';

@Directive({
  selector: '[libSpread]',
})
export class SpreadDirective implements DoCheck {
  @Input() host: any;
  @Input() bindingContext: any;
  marker: ChangeDetectorRef;
  constructor(@Host() injector: Injector) {
    this.marker = injector.get(ChangeDetectorRef);
  }
  _oldValues: any[] = [];
  ngDoCheck(): void {
    if (this.host && this.bindingContext) {
      const values = Object.values(this.bindingContext);
      const isSameLength = this._oldValues.length === values.length;
      const sameRefs = this._oldValues.every(
        (value, index) => value === values[index]
      );
      if (isSameLength && sameRefs) return;
      Object.assign(this.host, this.bindingContext);
      this.marker.markForCheck();
      this._oldValues = values;
    }
  }
}
