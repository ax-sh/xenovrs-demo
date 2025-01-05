import clsx from 'clsx';

import RightArrowSvg from '../assets/right-arrow.svg?react';

export function SeeProjectButton() {
  return (
    <button
      type='button'
      className={clsx(
        'bg-yellow whitespace-nowrap',
        'w-72 px-4 ',
        'text-black text-xl font-normal',
        'flex items-center justify-between'
      )}
    >
      <span>SEE PROJECT</span>
      <RightArrowSvg width={'30'} />
    </button>
  );
}
