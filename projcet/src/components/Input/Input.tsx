import { InputHTMLAttributes, useState } from 'react'
import type { UseFormRegister, RegisterOptions, FieldValues, FieldPath } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
}

export default function Input({
  errorMessage,
  className,

  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}: Props) {
  return (
    <div className={'relative ' + className}>
      <input className={classNameInput} {...rest} />

      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
