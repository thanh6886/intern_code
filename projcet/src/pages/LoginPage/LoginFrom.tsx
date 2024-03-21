import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { authApi } from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { SchemaLogin, schemaLogin } from 'src/utils/rules'
import { ObjectSchema, AnyObject } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function LoginFrom() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<SchemaLogin>({
    resolver: yupResolver<SchemaLogin>(schemaLogin)
  })
  const loginMutaion = useMutation({
    mutationFn: (body: SchemaLogin) => authApi.login(body)
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
      <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
        <div className='text-2xl'>Đăng nhập</div>
        <Input
          {...register('email')}
          type='email'
          className='mt-8'
          errorMessage={errors.email?.message}
          placeholder='Email'
        />
        <Input
          {...register('password')}
          type='password'
          className='mt-2'
          errorMessage={errors.password?.message}
          placeholder='Password'
          autoComplete='on'
        />
        <div className='mt-3'>
          <Button
            type='submit'
            className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
            // isLoading={loginMutaion.isLoading}
            // disabled={loginMutaion.isLoading}
          >
            Đăng nhập
          </Button>
        </div>
      </form>
    </div>
  )
}
