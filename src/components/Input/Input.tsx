import React, { ComponentProps, FC } from 'react';

import classNames from 'classnames';

enum Variant {
  PRIMARY,
  SECONDARY,
  BLACK,
  WHITE,
}
enum Size {
  LARGE,
  SMALL,
}
type InputProps = {
  variant?: Variant;
  label?: string;
  size?: Size;
} & ComponentProps<'input'>;

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.PRIMARY]: 'bg-red-500 text-white',
  [Variant.SECONDARY]: 'bg-yellow-500 text-white',
  [Variant.BLACK]: 'bg-red-500 text-white',
  [Variant.WHITE]: 'bg-yellow-500 text-white',
};

const Input: FC<InputProps> = ({ label = '', variant = Variant.PRIMARY, id, ...rest }) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
      <input
        id={id}
        className={classNames(
          'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline',
          VARIANT_MAPS[variant]
        )}
        {...rest}
      />
    </label>
  );
};

export { InputProps };
export default Input;
