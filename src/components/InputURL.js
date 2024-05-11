import React from 'react'
import { Button, Form, Input, message } from 'antd'

import logo from '../assets/logo/Simbolo/Azul.webp'


const hologramas = [
  {
    link:'https://www.amazon.es/BOYA-M1-Micr%C3%B3fono-profesional-digitales/dp/B09QKYWPMD/ref=asc_df_B07GKZNDLF/?tag=googshopes-21&linkCode=df0&hvadid=298022511556&hvpos=&hvnetw=g&hvrand=16372666648616651655&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=1005527&hvtargid=pla-649030623256&mcid=6eee15f618dc37698aea848a513e885e&th=1',
    name: 'BOYA BY-M1S Micrófono de Solapa Lavalier',
    foto: 'https://m.media-amazon.com/images/I/61AXDjKwuQL._AC_SY450_.jpg',
  },
  {
    link:'https://www.amazon.es/gp/product/B015R0IQGW/ref=ewc_pr_img_1?smid=A1AT7YVPFBWXBL&psc=1',
    name: 'RØDE VideoMicro Micrófono direccional ',
    foto: 'https://m.media-amazon.com/images/I/51IHZvFWMKL._AC_SY355_.jpg',
  }
]

const InputURL = () => {
  const [form] = Form.useForm()
  var holograma = {}

  const onFinish = () => {
    let link = form.getFieldValue('Link')
    holograma = hologramas.find(h => h.link === link)
    console.log(holograma)

    if(holograma){
      message.success('Submit success!')
    } else {
      message.error('Hologram not found!')
    }
  }

  const onFinishFailed = () => {
    message.error('Submit failed!')
  }

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <br/>
        <Form.Item name="Link" rules={[{required: true},{type: 'url'},{type: 'string',min: 6}]}>
          <Input className='Input' placeholder="Insert the URL of your product"/>
        </Form.Item>
        <div className="pre-next-buttons">
          <Form.Item>
              <Button className='Button' type="primary" htmlType="submit">
                <img src={logo} alt="Holograph it!"/>
                <h2 id='h2'>Holograph it!</h2>
              </Button>
          </Form.Item>
        </div>
      </Form>
      { holograma ? <p>{holograma.name}</p> : <p></p>}
    </div>
  )
}
export default InputURL