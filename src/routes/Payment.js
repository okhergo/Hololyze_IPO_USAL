import React, { useState } from 'react'
import { Layout } from 'antd'
import { Select, Button, message, Steps } from 'antd'

import { useParams } from "react-router-dom"

const { Option } = Select
const { Content } = Layout

const suscripciones = [
    {
    value: 'free',
    label: 'Gratis',
    price: 0,
    },
    {
    value: 'basic',
    label: 'Básico',
    price: 4.99,
    },
    {
    value: 'premium',
    label: 'Premium',
    price: 9.99,
    },
    {
    value: 'deluxe',
    label: 'Deluxe',
    price: 50,
    },
]

const Payment = () => {
    let { sub } = useParams()
    var subscriptionSelected = suscripciones.find(s => s.value === sub)
    
    const handleChange = (value) => {
        subscriptionSelected = suscripciones.find(s => s.value === value)
        console.log(subscriptionSelected)
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
                <p>Confirma tu plan</p>
                <Select default={subscriptionSelected.value} onChange={handleChange}>
                {suscripciones.map((s) => (
                    <Option key={s.value} value={s.value}>
                        {`${s.label} ${s.price}`}
                    </Option>
                ))}
                </Select>
                <Button type="primary" onClick={() => nextStep()}>
                    Next
                </Button>
            </div>
        },
        {
        title: 'Procedimiento de pago',
        content:
            <div>
                <p>Elige tu forma de pago</p>
                <p>{subscriptionSelected.price}</p>
                <Button type="primary" onClick={() => nextStep()}>
                    Next
                </Button>
                <Button onClick={() => prevStep()}> Previous </Button>

            </div>
        },
        {
        title: 'Finalizar',
        content:
            <div>
                <p>Gracias por suscribirte</p>
                <a href="/">
                    <Button  type="primary" onClick={() => message.success('¡Pago realizado con éxito!')}>
                        Done
                    </Button>
                </a>
                <Button onClick={() => prevStep()}> Previous </Button>
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
        <Steps current={current} items={items} />
        <div className="contentStyle">{steps[current].content}</div>
    </Content>
    </Layout>
    )
}
export default Payment