/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@poc/core';

import { PocHelloWorld as IPocHelloWorld } from '@poc/core/dist/types/components/poc-hello-world/poc-hello-world';
export declare interface PocHelloWorld extends Components.PocHelloWorld {}
@ProxyCmp({
  inputs: ['environment']
})
@Component({
  selector: 'poc-hello-world',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['environment'],
  outputs: ['callbackAfterClick']
})
export class PocHelloWorld {
  /**  */
  callbackAfterClick!: IPocHelloWorld['callbackAfterClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['callbackAfterClick']);
  }
}
