import { forwardRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  as?: 'button' | 'a'
  href?: string
  external?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-neutral-950 dark:hover:bg-white shadow-[0_10px_28px_rgba(24,24,27,0.18)]',
  secondary:
    'border border-zinc-300/80 bg-white/70 text-zinc-700 hover:border-zinc-400 hover:bg-white dark:border-zinc-700/80 dark:bg-zinc-900/55 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900',
  ghost:
    'text-zinc-600 hover:text-zinc-950 hover:bg-white/70 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-zinc-900/60',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, disabled, as, href, external, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium rounded-lg transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0 disabled:active:scale-100'

    const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

    if (as === 'a' && href) {
      return (
        <a
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-disabled={disabled}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
