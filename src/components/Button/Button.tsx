import './Button.css';

import React, { FC } from 'react';

import classNames from 'classnames';

export enum Variant {
  PRIMARY,
  SECONDARY,
  PRIMARY_OUTLINED,
  SECONDARY_OUTLINED,
  BLACK,
  WHITE,
}
export enum Size {
  LARGE = 'large',
  SMALL = 'small',
}
export enum State {
  DISABLED,
  ACTIVE,
}
interface ButtonProps {
  variant: Variant;
  label?: string;
  size: Size;
  className?: string;
  state: State;
  onClick?(): void;
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'px-2.5 text-xs',
  [Size.LARGE]: 'px-3 text-sm',
};
const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: 'bg-blue-500 text-white hover:bg-blue-700',
  [Variant.SECONDARY]: 'bg-orange-500 text-white hover:bg-orange-700',
  [Variant.PRIMARY_OUTLINED]:
    'bg-transparent text-blue-700 hover:bg-blue-500  hover:text-white border-blue-500 hover:border-transparent',
  [Variant.SECONDARY_OUTLINED]:
    'bg-transparent text-orange-700 hover:bg-orange-500  hover:text-white border-orange-500 hover:border-transparent',
  [Variant.BLACK]: 'bg-black-500 text-white hover:bg-black-700',
  [Variant.WHITE]: 'bg-white-500 text-black hover:bg-white-700',
};

const STATE_MAPS: Record<State, string> = {
  [State.ACTIVE]: '',
  [State.DISABLED]: 'opacity-50 cursor-not-allowed',
};

const Button: FC<ButtonProps> = ({ label, size, variant = Variant.PRIMARY, className, onClick, state }) => {
  return (
    <button
      className={classNames(
        `font-semi-bold py-2 px-4 rounded ${className}`,
        VARIANT_MAPS[variant],
        SIZE_MAPS[size],
        STATE_MAPS[state]
      )}
      onClick={onClick}
    >
      {label}
      hello
    </button>
  );
};

export { ButtonProps };
export default Button;
