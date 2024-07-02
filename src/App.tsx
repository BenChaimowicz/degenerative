import type { Component } from "solid-js";

import styles from "./App.module.css";
import { GenerateQuoteComponent } from "./components/generateQuote";

const App: Component = () => {
  return (
    <>
      <div class="w-full flex bg-gradient-to-r from-night to-eerie_black">
        <main
          role="main"
          class="w-full flex flex-col h-screen content-center justify-center"
        >
          <GenerateQuoteComponent></GenerateQuoteComponent>
        </main>
      </div>
    </>
  );
};

export default App;
