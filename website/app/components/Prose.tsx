import { PropsWithChildren } from 'react';

export function Prose(props: PropsWithChildren) {
  return <div>{props.children}</div>;
}
