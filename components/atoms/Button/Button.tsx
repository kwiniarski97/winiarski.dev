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
  switch (theme) {
    case ButtonTheme.Primary:
      return 'btn btn-primary';
    default:
      return 'btn btn-primary';
  }
}

export function Button({ theme, ...props }: ButtonProps) {
  const themeClasses = useButtonClasses(theme);
  return <button className={clsx(themeClasses, props.className)} {...props} />;
}
