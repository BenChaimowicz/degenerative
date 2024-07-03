import { Component, createEffect, createSignal } from "solid-js";
import { AvatarComponent, AvatarOptions } from "./avatar";

export const NavBarComponent: Component = () => {
  const [isLogged, setLogged] = createSignal<boolean>(false);
  const logIn = () => {
    setLogged(!isLogged());
    console.log("🚀 ~ logIn ~ isLogged:", isLogged());
  };

  return (
    <nav class="mx-auto px-6 py-3 w-full h-20 bg-gradient-to-b from-davy_gray to-night border-sh">
      <div class="flex justify-between items-center"></div>
      <div class="w-12 h-12">
        <AvatarComponent
          setLogged={logIn}
          loggedIn={isLogged}
        ></AvatarComponent>
      </div>
    </nav>
  );
};
