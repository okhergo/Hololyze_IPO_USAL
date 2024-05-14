import React, { useState, useEffect } from 'react'
import { Layout, Card, Select, Button, message, Steps } from 'antd'

import { useLocation, Link } from 'react-router-dom'
import { suscripciones } from './Pricing'
import PaymentForm from '../components/PaymentForm'

const { Option } = Select
const { Content } = Layout

const Payment = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const defaultValueFromUrl = queryParams.get('sub')

    const [selectedValue, setSelectedValue] = useState(defaultValueFromUrl || '')
    const [selectedObject, setSelectedObject] = useState({})

    useEffect(() => {
        setSelectedValue(defaultValueFromUrl || '')
        setSelectedObject(suscripciones.find(s => s.value === defaultValueFromUrl) || {})
    }, [defaultValueFromUrl])

    const handleChange = (value) => {
        setSelectedValue(value)
        setSelectedObject(suscripciones.find(s => s.value === value))
    }

    const [current, changeStep] = useState(0)
    const nextStep = () => {
        changeStep(current + 1)
    }
    const prevStep = () => {
        changeStep(current - 1)
    }
    const steps = [
        {
        title: 'Tu plan',
        content:
            <div>
                <div className='confirm-plan'>
                    <p>Confirma tu plan</p>
                    <span className='spacer'></span>
                    <Select value={selectedValue} onChange={handleChange}>
                    {suscripciones.map((s) => (
                        <Option value={s.value}> {`${s.label} ${s.price}`} </Option>
                    ))}
                    </Select>
                </div>
                <div className='padding-top'>
                    <Card className={selectedObject.style} title={selectedObject.label} bordered={false}>
                        <h1>{selectedObject.price}€</h1>
                        {selectedObject.desc}
                    </Card>
                </div>
                <div className='pre-next-buttons'>
                    <Link to={'/pricing'}><Button>Previous</Button></Link>
                    <Button type="primary" onClick={() => nextStep()}> Next </Button>
                </div>
            </div>
        },
        {
        title: 'Procedimiento de pago',
        content:
            <div>
                <p>Elige tu forma de pago</p>
                <PaymentForm />
                <div className='pre-next-buttons'>
                    <Button onClick={() => prevStep()}> Previous </Button>
                    <Button type="primary" onClick={() => { message.success('¡Pago realizado con éxito!'); nextStep()}}> Pagar </Button>
                </div>
            </div>
        },
        {
        title: 'Finalizar',
        content:
            <div>
                <h3>¡Gracias por suscribirte!</h3>
                <p>Estos son los detalles de tu plan de suscripción mensual</p>
                <div className='padding-top'>
                    <Card className={selectedObject.style} title={selectedObject.label} bordered={false}>
                        <h1>{selectedObject.price}€</h1>
                        {selectedObject.desc}
                    </Card>
                </div>
                <div className='pre-next-buttons'>
                    <Link to={'/'}><Button type="primary">Volver a home</Button></Link>
                </div>
            </div>
        },
    ]
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }))
  
    return (
    <Layout className='ContentLayout'>
    <Content className='Content'> 
        <h1>Pasarela de pago</h1>
        <Steps className="paymentSteps" current={current} items={items} />
        <div className="contentStyle">{steps[current].content}</div>
    </Content>
    </Layout>
    )
}
export default Payment