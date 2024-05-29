import { FC, PropsWithChildren } from 'react';

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return <section>{children}</section>;
};