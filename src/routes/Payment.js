import React, { useState, useEffect } from 'react'
import { Layout,Card,Select,Form,Result,Divider,DatePicker,Button,Input,message,Steps } from 'antd'

import { useLocation, Link } from 'react-router-dom'
import { suscripciones } from './Pricing'
import { useTranslation } from 'react-i18next'

const { Option } = Select
const { Content } = Layout

const Payment = () => {
    //Payment Form
  const {t} = useTranslation()
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
        title: t('yourPlan'),
        content:
            <div>
                <div className='confirm-plan'>
                    <p>{t('confirmPlan')}</p>
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
                    <Link to={'/pricing'}><Button>{t('previous')}</Button></Link>
                    <Button type="primary" onClick={() => nextStep()}> {t('next')} </Button>
                </div>
            </div>
        },
        {
        title: t('paymentProcedure'),
        content:
            <div>
                <p>{t('insertPaymentData')}</p>
                <br/>
                <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
                    <Form.Item name="card" label={t('cardNumber')} rules={[{required: true}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="name" label={t('cardName')} rules={[{required: true}]}>
                        <Input />
                    </Form.Item>
                    <div className='filaForm'>
                        <Form.Item name="fecha" label={t('cardDate')} rules={[{required: true}]}>
                            <DatePicker picker="month" />
                        </Form.Item>
                        <Form.Item name="code" label={t('cardCode')} rules={[{required: true}]}>
                            <Input />
                        </Form.Item>
                    </div>
                    <Divider/>
                    <div className='pre-next-buttons'>
                        <Button onClick={() => prevStep()}> {t('previous')} </Button>
                        <Button type="primary" htmlType="submit" onClick={() => { message.success(t('successfulPayment')); nextStep()}} disabled={!submittable}>{t('pay')}</Button>
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
                title={t('thanksSub')}
                subTitle="Order number: 2017182818828182881"
                extra={[
                <div>
                    <p>{t('paymentDetails')}</p>
                    <div className='padding-top'>
                        <Card className={selectedObject.style} title={selectedObject.label} bordered={false}>
                            <h1>{selectedObject.price}€</h1>
                            {selectedObject.desc}
                        </Card>
                    </div>

                </div>,                
                <Link to={'/pricing'}><Button>{t('buyAgain')}</Button></Link>,
                <Link to={'/'}><Button type="primary">{t('backHome')}</Button></Link>,
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
        <h1>{t('paymentProcess')}</h1>
        <Steps className="paymentSteps" current={current} items={items} />
        <div className="contentStyle">{steps[current].content}</div>
    </Content>
    </Layout>
    )
}
export default Payment