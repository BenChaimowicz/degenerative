import { Component, createSignal, onCleanup } from "solid-js";

export const QuoteBoxComponent: Component<TQuoteBoxProps> = (props) => {
  const [quote, setQuote] = createSignal<string>("");
  const [index, setIndex] = createSignal<number>(0);
  const text = () => props.text;

  const interval = setInterval(() => {
    if (quote().length < text()!.length) {
      setQuote(quote() + text()![index()]);
      setIndex(index() + 1);
    }
  }, 30);
  onCleanup(() => {
    clearInterval(interval);
  });

  return (
    <div class="max-w-md p-6 border-davy_gray rounded-lg text-center">
      <span class="font-serif text-xl text-transparent animate-text bg-gradient-to-r from-platinum via-battleship to-onyx bg-clip-text">
        {quote()}
      </span>
    </div>
  );
};

export type TQuoteBoxProps = { text?: string };
