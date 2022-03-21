import React, { FunctionComponent, useMemo } from 'react';
import { appendQueryString, siteUrl } from 'utils/helper';

interface Props {
  href: string;
  className?: string;
}

export const ExternalLink: FunctionComponent<Props> = props => {
  const { href, children, ...linkProps } = props;
  const url = useMemo(() => appendQueryString(href, 'ref', siteUrl('', false)), [href]);

  return (
    <a href={url} rel="noopener noreferrer" target="blank" {...linkProps}>
      {children}
    </a>
  );
};
