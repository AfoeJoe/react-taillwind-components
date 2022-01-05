import './Button.css';

import React, { FC } from 'react';

import classNames from 'classnames';

enum Variant {
  RED,
  YELLOW,
  GREEN,
  BLUE,
}
enum Size {
  LARGE,
  SMALL,
}
interface ButtonProps {
  variant: Variant;

  label: string;
  size: Size;
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'px-2.5 text-xs',
  [Size.LARGE]: 'px-3 text-sm',
};
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.RED]: 'bg-red-500 text-white',
  [Variant.YELLOW]: 'bg-yellow-500 text-white',
  [Variant.GREEN]: 'bg-green-500 text-white',
  [Variant.BLUE]: 'bg-blue-500 text-white',
};

const Button: FC<ButtonProps> = ({ label, size, variant = Variant.GREEN }) => {
  return <button className={classNames('inline-flex', VARIANT_MAPS[variant], SIZE_MAPS[size])}>{label}</button>;
};

export { ButtonProps };
export default Button;
