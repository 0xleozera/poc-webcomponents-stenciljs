/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PocHelloWorld {
        "environment": string;
    }
}
declare global {
    interface HTMLPocHelloWorldElement extends Components.PocHelloWorld, HTMLStencilElement {
    }
    var HTMLPocHelloWorldElement: {
        prototype: HTMLPocHelloWorldElement;
        new (): HTMLPocHelloWorldElement;
    };
    interface HTMLElementTagNameMap {
        "poc-hello-world": HTMLPocHelloWorldElement;
    }
}
declare namespace LocalJSX {
    interface PocHelloWorld {
        "environment"?: string;
        "onCallbackAfterClick"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "poc-hello-world": PocHelloWorld;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "poc-hello-world": LocalJSX.PocHelloWorld & JSXBase.HTMLAttributes<HTMLPocHelloWorldElement>;
        }
    }
}