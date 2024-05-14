import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'
import '../index.css'
import {hologramas} from '../components/InputURL'
import WebcamStreamCapture from './Webcam'

const { Content } = Layout

const Hologram = () => {
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
            {producto &&
                <h1>{producto.name}</h1>
            }
            <WebcamStreamCapture />
        </Content>
    </Layout>
  )
}
export default Hologram