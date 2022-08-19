import Link from 'next/link'
import clsx from '@/utils/css-helper'
import { ComponentPropsWithoutRef, ReactElement } from 'react'
import { UrlObject } from 'url'

const styles = {
  primary:
    'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary'
  className?: string
  href?: string | UrlObject
  props?: unknown
}

export function Button({
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonProps) {
  className = clsx(styles[variant], className || '')

  return href ? (
    <Link href={href} className={className}>
      {props.children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {props.children}
    </button>
  )
}
