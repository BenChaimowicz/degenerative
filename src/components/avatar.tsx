import { Accessor, Component, For, JSX, Show, createSignal } from "solid-js";

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
      viewBox="-1 -1 2 2"
      class="fill-battleship hover:cursor-pointer"
      onClick={open}
    >
      <circle cx="0" cy="0" r="1"></circle>
    </svg>
  );

  return (
    <>
      {logoSVG}
      <Show when={isOpen()}>
        <div>
          <span onClick={setLogged} class="text-platinum text-md">
            {loggedIn() ? "Log out" : "Log in"}
          </span>
        </div>
      </Show>
    </>
  );
};

export type AvatarProps = {
  setLogged: () => void;
  loggedIn: Accessor<boolean>;
};
export type AvatarOptions = { text: string; handler: () => void };
