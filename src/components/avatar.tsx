import { Accessor, Component, For, JSX, Show, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";
import { clickOutside } from "../directives/clickOutside";

export const AvatarComponent: Component<AvatarProps> = ({
  setLogged,
  loggedIn,
}) => {
  const [isOpen, setOpen] = createSignal(false);

  const open = () => {
    setOpen(!isOpen());
  };
  const logoSVG = (
    <svg
      id="avatar"
      viewBox="-1 -1 2 2"
      class="fill-battleship hover:cursor-pointer"
      onClick={open}
    >
      <circle cx="0" cy="0" r="1"></circle>
      <text
        class="fill-platinum font-bold"
        font-size="1px"
        text-anchor="middle"
        dy="0.35em"
      >
        {loggedIn() ? "BC" : "AN"}
      </text>
    </svg>
  );

  return (
    <>
      {logoSVG}
      <Transition
        enterActiveClass="transition-opacity duration-300"
        enterClass="opacity-0"
        enterToClass="opacity-100"
        exitActiveClass="transition-opacity duration-300"
        exitClass="opacity-100"
        exitToClass="opacity-0"
      >
        <Show when={isOpen()}>
          <div
            use:clickOutside={{
              callback: open,
              excludeRef: () => logoSVG as HTMLElement,
            }}
            class="flex flex-col justify-center items-center border-davy_gray bg-eerie_black absolute w-20 rounded-lg transition-all duration-500 ease-in-out"
          >
            <span class="text-platinum text-md">asdasd</span>
            <span class="text-platinum text-md">dddddd</span>
            <span class="text-platinum text-md">ssssssss</span>
            <span onClick={setLogged} class="text-platinum text-md">
              {loggedIn() ? "Log out" : "Log in"}
            </span>
            <span class="text-platinum text-md"></span>
          </div>
        </Show>
      </Transition>
    </>
  );
};

export type AvatarProps = {
  setLogged: () => void;
  loggedIn: Accessor<boolean>;
};
export type AvatarOptions = { text: string; handler: () => void };
