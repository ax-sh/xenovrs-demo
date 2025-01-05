import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export function RotatedLogo({ className }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span className={clsx('vertical text-6xl bg-black text-white px-10', className)}>Xenovrs</span>
  );
}
