import React from 'react';
import { useRootPath } from '@/hooks/useRootPath';

export const Image = React.forwardRef<
  React.ElementRef<'img'>,
  React.ComponentPropsWithoutRef<'img'>
>(({ children, src, alt, ...props }, forwardedRef) => {
  const rootPath = useRootPath();
  // const imgPath = rootPath + src;
  const imgPath = src;

  return (
    <img src={imgPath} alt={alt} {...props} ref={forwardedRef}>
      {children}
    </img>
  );
});

Image.displayName = 'Image';
