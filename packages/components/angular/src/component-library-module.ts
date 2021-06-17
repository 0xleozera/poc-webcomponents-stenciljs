import { NgModule } from '@angular/core'
import { defineCustomElements } from '@poc/stencil-component/loader'

import { DemoComponent } from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = [
  // proxies
  DemoComponent,
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
