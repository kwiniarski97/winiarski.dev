import { PropsWithChildren } from "react";

function P({ children }: PropsWithChildren<{}>) {
  return <p>{children}</p>;
}

export { P };
