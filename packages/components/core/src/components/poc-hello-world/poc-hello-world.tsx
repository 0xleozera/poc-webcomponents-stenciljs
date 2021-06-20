import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'poc-hello-world',
  styleUrl: 'poc-hello-world.css',
  shadow: true,
})
export class PocHelloWorld {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
