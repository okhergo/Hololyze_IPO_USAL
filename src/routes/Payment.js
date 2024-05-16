import React, { useState, useEffect } from 'react'
import { Layout,Card,Select,Form,Result,Divider,DatePicker,Button,Input,message,Steps } from 'antd'

import { useLocation, Link } from 'react-router-dom'
import { suscripciones } from './Pricing'

const { Option } = Select
const { Content } = Layout

const Payment = () => {
    //Payment Form
    const [form] = Form.useForm()
    const [submittable, setSubmittable] = React.useState(false)

    const values = Form.useWatch([], form)
    React.useEffect(() => {
        form.validateFields({validateOnly: true,})
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false))
    }, [form, values])

    //Get subscription
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
                <p>Introduce tus datos de pago</p>
                <br/>
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                    <Form.Item name="card" label="Número de tarjeta" rules={[{required: true}]}>
                            <Input />
                    </Form.Item>
                    <Form.Item name="name" label="Nombre del titular" rules={[{required: true}]}>
                            <Input />
                    </Form.Item>
                    <div className='filaForm'>
                        <Form.Item name="fecha" label="Fecha de vencimiento" rules={[{required: true}]}>
                            <DatePicker picker="month" />
                        </Form.Item>
                        <Form.Item name="code" label="Código de seguridad" rules={[{required: true}]}>
                            <Input />
                        </Form.Item>
                    </div>
                    <Divider/>
                    <div className='pre-next-buttons'>
                        <Button onClick={() => prevStep()}> Previous </Button>
                        <Button type="primary" htmlType="submit" onClick={() => { message.success('¡Pago realizado con éxito!'); nextStep()}} disabled={!submittable}>Pagar</Button>
                    </div>
                </Form>
            </div>
        },
        {
        title: 'Finalizar',
        content:
            <div>
                <Result
                status="success"
                title="¡Gracias por suscribirte!"
                subTitle="Order number: 2017182818828182881"
                extra={[
                <div>
                    <p>Estos son los detalles de tu plan de suscripción mensual</p>
                    <div className='padding-top'>
                        <Card className={selectedObject.style} title={selectedObject.label} bordered={false}>
                            <h1>{selectedObject.price}€</h1>
                            {selectedObject.desc}
                        </Card>
                    </div>

                </div>,                
                <Link to={'/pricing'}><Button>Comprar de nuevo</Button></Link>,
                <Link to={'/'}><Button type="primary">Volver a home</Button></Link>,
                ]}
                />
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