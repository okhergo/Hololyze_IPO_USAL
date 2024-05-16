import React, { useState, useEffect } from 'react'
import { Layout, Card, Button } from 'antd'
import CustomCarousel from '../components/Carousel'
import { useLocation, Link } from 'react-router-dom'
import InputURL from '../components/InputURL'
import '../index.css'
import {hologramas} from '../components/InputURL'
import { useTranslation } from "react-i18next"

const { Content } = Layout

const Home = () => {
  const {t} = useTranslation()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const defaultValueFromUrl = queryParams.get('product')
  const [producto, setSelectedObject] = useState({})

  useEffect(() => {
    setSelectedObject(hologramas.find(h => h.id == defaultValueFromUrl) || null)
  }, [defaultValueFromUrl])

  return (
    <Layout className='ContentLayout'>
    <Content className='Content'>
      <CustomCarousel/>
      <InputURL/>
      {producto &&
      <Card className='Card' bordered={false}>
        <div className="fila">
          <div>
            <h1>{producto.name}</h1>
            <p>{producto.desc}</p>
            <span className='spacer'></span>
            <Link to={`/hologram?product=${producto.id}`}>
              <Button className='Button' type="primary">
                {t('getHologram')}
              </Button>
            </Link>
          </div>
          <div className='imageWrapper'>
            <img src={producto.foto} alt="Foto del producto"></img>
          </div>
        </div>
      </Card>
      }
    </Content>
    </Layout>
  )
}
export default Home