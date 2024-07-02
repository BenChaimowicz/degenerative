import { Component, createSignal, onCleanup } from "solid-js";

export const LoaderComponent: Component = () => {
  const [text, setText] = createSignal("Loading");

  const interval = setInterval(() => {
    if (text().length < 10) {
      setText(text() + ".");
    } else {
      setText("Loading");
    }
  }, 1000);

  onCleanup(() => {
    clearInterval(interval);
  });
  return (
    <div class="animate-bounce bg-transparent text-xl text-center text-platinum p-6">
      {text()}
    </div>
  );
};
