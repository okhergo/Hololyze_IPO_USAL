import React from 'react'
import { Layout, Button, QRCode, Card } from 'antd'
import '../index.css'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

const { Content } = Layout

const Extension = () => {
    const { t, i18n } = useTranslation()

    return (
    <Layout className='ContentLayout'>
        <Content className='Content'>
            <h1>Hololyze Chrome Extension</h1>
            <div className="fila">
                <div>
                    <p>Desde Hololyze hemos desarrollado una extensión para navegadores Chrome que te permitirá exprimir al máximo nuestras carcterísticas sin tener que abandonar tu plataforma de compra. Simplemente instala 'Hololyze' desde la tienda de Chrome.</p>
                    <span className='spacer'></span>
                    <Link to={'https://chromewebstore.google.com/?hl=es&pli=1'}>
                    <Button className='ButtonQR' type="primary">
                        {t('getHologram')}
                    </Button>
                    </Link>
                </div>
                <div className='imageWrapper'>
                    <QRCode value={'https://chromewebstore.google.com/?hl=es&pli=1'} />
                </div>
            </div>
        </Content>
    </Layout>
    )
}
export default Extension