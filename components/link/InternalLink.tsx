import Link, { LinkProps } from 'next/link';
import React, { FunctionComponent, HTMLAttributes } from 'react';

interface Props extends LinkProps {
  className?: HTMLAttributes<HTMLElement>['className'];
}

export const InternalLink: FunctionComponent<Props> = props => {
  const { className, children, ...linkProps } = props;

  return (
    <Link {...linkProps}>
      <a className={className}>{children}</a>
    </Link>
  );
};
