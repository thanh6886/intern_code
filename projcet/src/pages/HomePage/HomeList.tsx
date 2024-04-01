import { useQuery } from '@tanstack/react-query'
import { Button, DatePicker, Input, Select, Skeleton, Space, Table, Tag } from 'antd'
import React from 'react'
import { productAPI } from 'src/apis/product.api'
import { Product } from 'src/types/auth.type'

export default function HomeList() {
  const { Option } = Select
  const { RangePicker } = DatePicker
  const { Column } = Table
  const { data: product } = useQuery({
    queryKey: ['data'],
    queryFn: productAPI.getProduct
  })

  return (
    <>
      <div className='tableForm__filter'>
        <Select id='status-select' defaultValue='Status' className='tableForm__filter-select'>
          <Option value='processing'>PROCESSING</Option>
          <Option value='fulfilled'>FULFILLED</Option>
          <Option value='pending'>PENDING</Option>
          <Option value='received'>RECEIVED</Option>
          <Option value='all'>ALL</Option>
        </Select>
        <Select defaultValue='Client' className='tableForm__filter-select'>
          <Option value='yopmail'>Yopmail</Option>
          <Option value='powergate'>Powergate</Option>
        </Select>
        <RangePicker className='tableForm__filter-date' />

        <Input id='invoice-input' placeholder='Invoice #' className='tableForm__filter-input' />

        <div className='tableForm__filter-cta'>
          <Button type='primary' className='filter-cta__apply'>
            Apply
          </Button>
          <Button className='filter-cta__clear'>Clear</Button>
        </div>
      </div>

      <Skeleton active paragraph={{ rows: 20 }} />

      <div>
        <h1>List Product</h1>
        <Table>
          <Column
            title='Status'
            dataIndex='status'
            key='status'
            render={(status: string) => {
              let color
              if (status === 'PROCESSING') {
                color = 'orange'
              }
              if (status === 'FULFILLED') {
                color = 'green'
              }
              if (status === 'PENDING') {
                color = 'grey'
              }
              if (status === 'RECEIVED') {
                color = 'blue'
              }

              return (
                <Tag color={color} key={status}>
                  {status.toUpperCase()}
                </Tag>
              )
            }}
          />

          <Column title='Date' dataIndex='createdAt' key='createdAt' />
          <Column title='Client' dataIndex='client' key='client' />
          <Column title='Currency' dataIndex='currency' key='currency' />
          <Column
            title='Total'
            dataIndex='total'
            key='total'
            render={(total: number) => (
              <p>
                {Number(total).toLocaleString('vi', {
                  style: 'currency',
                  currency: 'VND'
                })}
              </p>
            )}
            sortOrder='descend'
          />
          <Column title='Invoice #' dataIndex='invoice' key='invoice' />

          <Column
            title='Action'
            key='action'
            render={(_: any, record: any) => (
              <Space size='middle'>
                <Button
                  style={{
                    backgroundColor: '#2196F3',
                    color: '#fff'
                  }}
                  type='primary'
                >
                  View Detail
                </Button>

                <Button
                  style={{
                    backgroundColor: '#F44336',
                    color: '#fff'
                  }}
                  danger
                  shape='round'
                ></Button>
              </Space>
            )}
          />
        </Table>
      </div>
    </>
  )
}
