import { toJpeg } from "html-to-image";
import { Component, createSignal, onCleanup } from "solid-js";
import { saveAs } from "file-saver";

export const QuoteBoxComponent: Component<TQuoteBoxProps> = (props) => {
  const [quote, setQuote] = createSignal<string>("");
  const [bgImage, setBgImage] = createSignal<string>("");
  const [index, setIndex] = createSignal<number>(0);
  const text = () => props.text;

  let saveRef: HTMLDivElement;
  const interval = setInterval(() => {
    if (quote().length < text()!.length) {
      setQuote(quote() + text()![index()]);
      setIndex(index() + 1);
    }
  }, 30);
  onCleanup(() => {
    clearInterval(interval);
  });

  const saveAsJPG = async () => {
    if (saveRef) {
      try {
        const data = await toJpeg(saveRef, { quality: 0.95 });
        saveAs(data, "example.jpg");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div
        class="max-w-md p-6 border-davy_gray rounded-lg text-center"
        ref={(el) => (saveRef = el)}
      >
        <span class="font-serif text-xl text-transparent animate-text bg-gradient-to-r from-platinum via-battleship to-onyx bg-clip-text">
          {quote()}
        </span>
      </div>
    </>
  );
};

export type TQuoteBoxProps = { text?: string };
