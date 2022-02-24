import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonTheme;
}

function useButtonClasses(theme: ButtonTheme) {
  const sharedClasses = [
    'p-2 block -skew-x-6 uppercase font-bold cursor-pointer',
    'transition ease-in-out duration-100',
    'shadow-hard-1/2 hover:shadow-hard-1 shadow-black active:shadow-hard-1/4',
  ];

  switch (theme) {
    case ButtonTheme.Primary:
      return clsx(sharedClasses, 'bg-primary-400 text-black');
    default:
      return clsx(sharedClasses, 'bg-secondary-400 text-black');
  }
}

export function Button({ theme, className, ...props }: ButtonProps) {
  const themeClasses = useButtonClasses(theme);
  return <button className={clsx(themeClasses, className)} {...props} />;
}
