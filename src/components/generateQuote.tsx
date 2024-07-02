import {
  Match,
  Show,
  Switch,
  createEffect,
  createResource,
  createSignal,
  type Component,
} from "solid-js";
import { BigButtonComponent } from "./buttons";
import { QuoteBoxComponent } from "./quoteBox";
import { TDegen, getQuote } from "../http/quotes";
import { LoaderComponent } from "./loader";

export const GenerateQuoteComponent: Component = () => {
  const [currentDegen, setDegen] = createSignal<TDegen>();
  const [degen] = createResource(currentDegen, getQuote);

  return (
    <>
      <div class="flex justify-center">
        <div class="flex flex-col ">
          <div class="w-auto h-48">
            <Switch>
              <Match when={degen.loading}>
                <div class="w-auto h-48">
                  <LoaderComponent></LoaderComponent>
                </div>
              </Match>
              <Match when={degen()}>
                <QuoteBoxComponent text={degen()?.text}></QuoteBoxComponent>
              </Match>
            </Switch>
          </div>
          <div class="flex justify-center">
            <BigButtonComponent
              text="Uninspire Me"
              handleClick={setDegen}
            ></BigButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};
