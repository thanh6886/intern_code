import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { range } from 'lodash'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { authApi } from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { SchemaLogin, schemaLogin } from 'src/utils/rules'

export default function RegisterForm() {
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
        console.log(data.data.data.user_cookie)
        // SetlocalStorage(data.data.data.user_cookie)
        navigate('/')
      }
    })
  })
  return (
    <div>
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
          <Input
            name='comfirm_password'
            register={register}
            type='password'
            className='mt-2'
            errorMessage={errors.password?.message}
            placeholder='Nhập lại mật khẩu'
            autoComplete='on'
          />
          <Input
            name='fullName'
            register={register}
            type='text'
            className='mt-2'
            errorMessage={errors.password?.message}
            placeholder='FullName'
          />
          <label htmlFor='gioitinh'>giới tính</label>
          <select
            name='gioitinh'
            className='h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange'
          >
            <option disabled>Giới tính</option>
            {['nam', 'nữ', 'khác'].map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          <label htmlFor='quocgia'>QUỐC GIA</label>
          <select
            name='quocgia'
            className='h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange'
          >
            <option disabled>QUỐC GIA</option>
            {['nam', 'nữ', 'khác'].map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          <label htmlFor='thanhpho'>Thành Phố</label>
          <select
            name='thanhpho'
            className='h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange'
          >
            <option disabled>Thành phố</option>
            {['nam', 'nữ', 'khác'].map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
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
    </div>
  )
}
