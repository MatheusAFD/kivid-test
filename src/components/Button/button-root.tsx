import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
}

export function ButtonRoot({ children, icon, ...props }: ButtonProps) {
  return (
    <button
      className="flex gap-2 items-center px-4 py-2 w-full sm:w-auto justify-center bg-slate-500 shadow-md hover:brightness-110 transition-colors rounded-md text-slate-300"
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
