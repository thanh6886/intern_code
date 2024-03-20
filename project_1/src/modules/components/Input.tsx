import React from 'react'
import { UseFormRegister } from 'react-hook-form'
interface Props {
  errorMessage?: string
  name: string
  register?: UseFormRegister<any>
}

export default function Input({ errorMessage, name, register, ...rest }: Props) {
  return (
    <div>
      <input {...rest} />
      <div>{errorMessage}</div>
    </div>
  )
}
