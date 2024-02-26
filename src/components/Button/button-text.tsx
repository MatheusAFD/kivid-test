import { HTMLAttributes, ReactNode } from 'react'

interface ButtonTextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export function ButtonText({ children, ...props }: ButtonTextProps) {
  return <p {...props}>{children}</p>
}
