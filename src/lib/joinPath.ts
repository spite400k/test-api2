import { join } from 'path';

export const joinPath = (...paths: string[]) => {
  const pathForReplace = join(...paths);
  if (pathForReplace === undefined) return '';

  return pathForReplace.replace('https:/', 'https://');
};
