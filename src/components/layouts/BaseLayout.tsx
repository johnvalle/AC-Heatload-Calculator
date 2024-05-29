import { PropsWithChildren } from 'react';

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return <section>{children}</section>;
};
