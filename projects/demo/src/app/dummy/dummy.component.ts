import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
  exportAs: 'dummy',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DummyComponent implements OnInit {
  @Input() some: any;
  @Input() list: any;
  @Input() vars: any;

  constructor() {}

  ngOnInit(): void {}
}
