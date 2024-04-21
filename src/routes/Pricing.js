import React from 'react'
import { Layout } from 'antd'
import { Card, Col, Row } from 'antd'

const { Content } = Layout

const Pricing = () => {
  return (
    <Layout className='ContentLayout'>
    <Content className='Content'> 
        <h1>Selecciona tu plan</h1>
        <br/>
        <Row gutter={[8,8]}>
            <Col span={12}>
                <a href="amazon.es" >
                    <Card title="GRATIS" bordered={false}>
                        <h1>0€</h1>
                        2 hologramas gratuitos de prueba
                    </Card>
                </a>
            </Col>
            <Col span={12}>
                <a href="amazon.es" >
                    <Card className='Card' title="BÁSICO" bordered={false}>
                        <h1>4,99€</h1>
                        10 hologramas incluidos al mes
                    </Card>
                </a>
            </Col>
            <Col span={12}>
                <a href="amazon.es" >
                    <Card className='Card' title="PREMIUM" bordered={false}>
                        <h1>9,99€</h1>
                        50 hologramas incluidos al mes
                    </Card>
                </a>
            </Col>
            <Col span={12}>
                <a href="amazon.es" >
                    <Card className='DeluxeCard' title="DELUXE" bordered={false}>
                        <h1>50€</h1>
                        Todos los hologramas que desees cada mes
                    </Card>
                </a>
            </Col>
        </Row>
    </Content>
    </Layout>
  )
}
export default Pricing