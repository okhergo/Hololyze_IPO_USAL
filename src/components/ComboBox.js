import React from 'react'
import { Select, Space } from 'antd'

const handleChange = (value) => {
  console.log(`selected ${value}`)
}
const ComboBoxSuscripciones = (selected) => {
  return (
  <Space wrap>
    <Select defaultValue={selected} onChange={handleChange}
      options={[
        {
          value: 'free',
          label: 'Gratis',
        },
        {
          value: 'basic',
          label: 'Básico',
        },
        {
          value: 'premium',
          label: 'Premium',
        },
        {
          value: 'deluxe',
          label: 'Deluxe',
        },
      ]}
    />
  </Space>
  )
}
export default ComboBoxSuscripciones