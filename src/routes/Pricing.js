import React from 'react'
import { Layout } from 'antd'
import { Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'

const { Content } = Layout

export const suscripciones = [
    {
    value: 'free',
    label: 'Gratis',
    price: 0,
    desc: '2 hologramas gratuitos de prueba',
    style: ''
    },
    {
    value: 'basic',
    label: 'Básico',
    price: 4.99,
    desc: '10 hologramas incluidos al mes',
    style: 'Card'
    },
    {
    value: 'premium',
    label: 'Premium',
    price: 9.99,
    desc: '50 hologramas incluidos al mes',
    style: 'Card'
    },
    {
    value: 'deluxe',
    label: 'Deluxe',
    price: 50,
    desc: 'Todos los hologramas que desees cada mes',
    style: 'DeluxeCard'
    },
]

const Pricing = () => {
  return (
    <Layout className='ContentLayout'>
    <Content className='Content'> 
        <h1>Selecciona tu plan</h1>
        <br/>
        <Row gutter={[8,8]}>
            {suscripciones.map((sub) => (
            <Col span={12}>
                <Link to={`/payment?sub=${sub.value}`}>
                    <Card className={sub.style} title={sub.label} bordered={false}>
                        <h1>{sub.price}</h1>
                        {sub.desc}
                    </Card>
                </Link>
            </Col>
            ))}
        </Row>
    </Content>
    </Layout>
  )
}
export default Pricing