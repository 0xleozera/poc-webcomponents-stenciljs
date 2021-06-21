import { NgModule } from '@angular/core'
import { defineCustomElements } from '@poc/core/loader'

import { PocHelloWorld } from './directives/proxies'

defineCustomElements(window)

const DECLARATIONS = [
  // proxies
  PocHelloWorld,
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ComponentLibraryModule {}
