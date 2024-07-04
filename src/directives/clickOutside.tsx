import { Accessor, onCleanup, JSX } from "solid-js";

export const clickOutside = (
  el: Element,
  accessor: Accessor<{ callback: () => void; excludeRef?: () => HTMLElement }>
) => {
  const { callback, excludeRef } = accessor();
  const excludedElement = excludeRef?.();
  const onClick = (e: Event) => {
    if (excludedElement) {
      return (
        !el.contains(e.target as Node) &&
        !excludedElement.contains(e.target as Node) &&
        callback?.()
      );
    }
    return !el.contains(e.target as Node) && callback?.();
  };
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
};

declare module "solid-js" {
  namespace JSX {
    interface DirectiveFunctions {
      clickOutside: typeof clickOutside;
    }
  }
}
