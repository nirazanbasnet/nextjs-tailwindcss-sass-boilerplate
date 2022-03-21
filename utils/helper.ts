import config from '../config';

export const removeTrailingSlashes = (str: string): string => str.replace(/^\/|\/$/g, '');

export const siteUrl = (path?: string, withProtocol = true): string => {
  const protocol = withProtocol ? `http${config.app.is_secure ? 's' : ''}://` : '';
  const base = removeTrailingSlashes(config.app.base_url);
  const endpoint = path ? removeTrailingSlashes(path) : '';

  return `${protocol}${base}/${endpoint}`;
};

export const appendQueryString = (uri: string, key: string, value: string): string => {
  const baseUri = uri.replace(/\/$/, '');
  const pattern = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  const separator = baseUri.indexOf('?') === -1 ? '?' : '&';

  if (baseUri.match(pattern)) {
    return baseUri.replace(pattern, '$1' + key + '=' + value + '$2');
  }

  return baseUri + separator + key + '=' + value;
};

export const nl2Br = (str: string): string => str.replace(/\n/g, '<br />');
