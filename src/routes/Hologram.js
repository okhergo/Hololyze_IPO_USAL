import React, { useState, useEffect } from 'react'
import { Layout,Card } from 'antd'
import { useLocation, Link } from 'react-router-dom'
import '../index.css'
import {hologramas} from '../components/InputURL'
import WebcamStreamCapture from '../components/Webcam'
import Timer from '../components/Timer'
import { LeftOutlined } from '@ant-design/icons'
import { useTranslation } from "react-i18next"

const { Content } = Layout

const Hologram = () => {
  const {t} = useTranslation()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const defaultValueFromUrl = queryParams.get('product')
  const [producto, setSelectedObject] = useState({})

  useEffect(() => {
    setSelectedObject(hologramas.find(h => h.id == defaultValueFromUrl) || null)
  }, [defaultValueFromUrl])

  console.log(producto)

  return (
    <Layout className='ContentLayout'>
      <Content className='Content'>
        <Link to='/'>{React.createElement(LeftOutlined)}{t('back')}</Link>
        <Card>
          <div className='webcamWrapper'>
            {producto &&
              <h2>{producto.name}</h2>
            }
            <img className='capa1' src={producto.foto} alt="Holograma"/>
            <WebcamStreamCapture className='capa2' />
            <Timer/>
          </div>
        </Card>
      </Content>
    </Layout>
  )
}
export default Hologram