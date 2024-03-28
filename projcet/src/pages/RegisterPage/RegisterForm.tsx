import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { range } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { authApi } from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import http from 'src/config/https'
import { ILocation } from 'src/interface/user'
import { SchemaRegister, schemaRegister } from 'src/utils/rules'

export default function RegisterForm() {
  const [location, setLocation] = useState([])
  const [selectValue, setselectValue] = useState(0)
  const [cty, setCty] = useState([])
  useEffect(() => {
    http.get('/location').then((res) => {
      setLocation(res.data.data)
    })
  }, [])
  useEffect(() => {
    http.get(`/location?pid=${selectValue}`).then((res) => {
      setCty(res.data.data)
    })
  }, [selectValue])

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<SchemaRegister>({
    resolver: yupResolver<SchemaRegister>(schemaRegister)
  })
  const RegisterMutaion = useMutation({
    mutationFn: (body: SchemaRegister) => authApi.register(body)
  })

  const onSubmit = handleSubmit((paylaod) => {
    RegisterMutaion.mutate(paylaod, {
      onSuccess: (data) => {
        console.log(data.data)
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
            name='repeatPassword'
            register={register}
            type='password'
            className='mt-2'
            errorMessage={errors.repeatPassword?.message}
            placeholder='Nhập lại mật khẩu'
            autoComplete='on'
          />
          <Input
            name='fullName'
            register={register}
            type='text'
            className='mt-2'
            // errorMessage={errors.fullname?.message}
            placeholder='FullName'
          />
          {/* <label htmlFor='gioitinh'>giới tính</label>
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
          <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.gender?.message}</div> */}

          <select
            {...register('region')}
            className='h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange'
            onChange={(e) => setselectValue(parseInt(e.target.value))}
          >
            <option disabled>QUỐC GIA</option>
            {location.map((e: ILocation) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
          <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.region?.message}</div>

          <select
            {...register('state')}
            className='h-10 w-full cursor-pointer rounded-sm border border-black/10 px-3 hover:border-orange'
          >
            <option disabled>Thành phố</option>
            {cty.map((e: ILocation) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>

          <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.state?.message}</div>
          <div className='mt-3'>
            <Button
              type='submit'
              className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
            >
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
