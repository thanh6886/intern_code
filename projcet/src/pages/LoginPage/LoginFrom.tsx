import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { authApi } from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { SchemaLogin, schemaLogin } from 'src/utils/rules'
import { ObjectSchema, AnyObject } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SetlocalStorage } from 'src/utils/utils'
import { useNavigate } from 'react-router-dom'

export default function LoginFrom() {
  const navigate = useNavigate()
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

  const onSubmit = handleSubmit((paylaod) => {
    loginMutaion.mutate(paylaod, {
      onSuccess: (data) => {
        // console.log(data.data.data.token)
        SetlocalStorage(data.data.data.token)
        navigate('/')
      }
    })
  })
  return (
    <div>
      <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
        <div className='text-2xl'>Đăng nhập</div>
        <Input
          name='email'
          register={register}
          type='email'
          className='mt-8'
          errorMessage={errors.email?.message}
          placeholder='Email'
        />
        <Input
          name='password'
          register={register}
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
            isLoading={loginMutaion.isLoading}
            disabled={loginMutaion.isLoading}
          >
            Đăng nhập
          </Button>
        </div>
      </form>
    </div>
  )
}
