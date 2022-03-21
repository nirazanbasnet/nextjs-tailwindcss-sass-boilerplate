import { FunctionComponent, HTMLAttributes } from 'react';
import Footer from '@module/footer/Footer';
import Header from '@module/header/Header';

type Props = {
  className?: HTMLAttributes<HTMLDivElement>['className'];
};

export const AppLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};
