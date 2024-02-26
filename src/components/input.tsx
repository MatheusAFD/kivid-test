'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  errorMessage?: string
  rightIcon: ReactNode
}

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, rightIcon, errorMessage, ...props }: TextFieldProps, ref) => {
    const id = useId()

    return (
      <>
        <label htmlFor={id}>{label}</label>
        <div className="relative">
          <input
            id={id}
            className="bg-slate-700 p-3 rounded-md placeholder:px-1 placeholder:text-sm w-full shadow-sm"
            ref={ref}
            {...props}
          />
          <div className="absolute inset-y-0 right-4 pl-3 flex items-center">
            {rightIcon}
          </div>
        </div>

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </>
    )
  }
)

Input.displayName = 'Input'
