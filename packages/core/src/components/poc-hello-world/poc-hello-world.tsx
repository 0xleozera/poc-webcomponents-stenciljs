import { Component, Event, EventEmitter, h, Prop } from '@stencil/core'

@Component({
  tag: 'poc-hello-world',
  styleUrl: 'poc-hello-world.css',
})
export class PocHelloWorld {
  @Prop() environment: string = 'VanillaJS'

  @Event() callbackAfterClick: EventEmitter

  handleButtonClick() {
    console.log('handleButtonClick has been called!')
    this.callbackAfterClick.emit()
  }

  render() {
    return (
      <main class="poc-hello-world__container">
        <h1 class="poc-hello-world__title">
          I'm running at <span>{this.environment}</span> 🔌
        </h1>
        <button
          class="poc-hello-world__button"
          type="button"
          onClick={() => this.handleButtonClick()}
        >
          Click me
        </button>
      </main>
    )
  }
}
