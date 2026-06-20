'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[#1d1d1f] text-white hover:bg-[#3a3a3c] focus-visible:ring-[#1d1d1f]': variant === 'primary',
            'bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:bg-[#f5f5f7] focus-visible:ring-[#1d1d1f]': variant === 'secondary',
            'text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#f5f5f7] focus-visible:ring-[#1d1d1f]': variant === 'ghost',
            'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500': variant === 'danger',
          },
          {
            'px-4 py-1.5 text-xs': size === 'sm',
            'px-5 py-2.5 text-sm': size === 'md',
            'px-8 py-3.5 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {children}
          </span>
        ) : children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
