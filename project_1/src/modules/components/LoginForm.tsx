import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Schema, schemaLogin } from 'src/auth/rules'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { authApi } from 'src/api/auth.api'
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({
    resolver: yupResolver<Schema>(schemaLogin)
  })
  const loginMutaion = useMutation({
    mutationFn: (body: Schema) => authApi.login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutaion.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      }
    })
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type='email' {...register('email')} placeholder='Email' />
        </div>
        <div>
          <input type='password' {...register('password')} placeholder='Password' />
        </div>

        <div className='mt-5'>
          <button type='submit' className='bg-red-400'>
            đăng nhập
          </button>
        </div>
      </form>
    </div>
  )
}
