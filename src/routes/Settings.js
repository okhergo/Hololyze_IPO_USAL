import React, {useContext} from 'react'
import { Layout, Switch, Collapse, Select, Button, Divider, Card } from 'antd'
import '../index.css'
import { ThemeContext } from '../contexts/theme'
import { useTranslation } from "react-i18next"
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"

const { Option } = Select
const { Content } = Layout

const Settings = () => {
    const { i18n } = useTranslation()
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    const pedidos = [
        {
          id: 1,
          link:'https://www.amazon.es/BOYA-M1-Micr%C3%B3fono-profesional-digitales/dp/B09QKYWPMD/ref=asc_df_B07GKZNDLF/?tag=googshopes-21&linkCode=df0&hvadid=298022511556&hvpos=&hvnetw=g&hvrand=16372666648616651655&hvpone=&hvptwo=&hvqmt=&hvdev=m&hvdvcmdl=&hvlocint=&hvlocphy=1005527&hvtargid=pla-649030623256&mcid=6eee15f618dc37698aea848a513e885e&th=1',
          name: 'BOYA BY-M1S',
          desc: '▶【PROFESSIONAL MICROPHONE】 : BY-M1S mini micrófono diseñado con una cápsula omnidireccional actualizada en el interior y captura el sonido con calidad de transmisión desde un rango de 360 grados.El parabrisas incluido protege contra el ruido del viento para un sonido más claro.',
          foto: 'https://m.media-amazon.com/images/I/61AXDjKwuQL._AC_SY450_.jpg',
        },
        {
          id: 2,
          link:'https://www.amazon.es/gp/product/B015R0IQGW/ref=ewc_pr_img_1?smid=A1AT7YVPFBWXBL&psc=1',
          name: 'RØDE VideoMicro',
          desc: '▶【PROFESSIONAL MICROPHONE】 : BY-M1S mini micrófono diseñado con una cápsula omnidireccional actualizada en el interior y captura el sonido con calidad de transmisión desde un rango de 360 grados.El parabrisas incluido protege contra el ruido del viento para un sonido más claro.',
          foto: 'https://m.media-amazon.com/images/I/51IHZvFWMKL._AC_SY355_.jpg',
        }
    ]
    const suscripcion = {
        value: 'deluxe',
        label: 'Deluxe',
        price: 50,
        desc: 'Todos los hologramas que desees cada mes',
        style: 'DeluxeCard'
    }
    let val
    const onChange = () => {
        toggleTheme()
        if(themeName) val = true
        else val = false
    }
    const items = [
        {
            key: '1',
            label: 'Apariencia',
            children:
            <div>
                <div className='confirm-plan'>
                    <p>Activar/desactivar el modo oscuro</p>
                    <span className='spacer'></span>
                    <Switch value={val} onChange={onChange}></Switch>
                </div>
                <div className='confirm-plan'>
                    <p>Cambiar el idioma de la aplicación</p>
                    <span className='spacer'></span>
                    <Select value={i18n.language} onChange={val => i18n.changeLanguage(val)}>
                        <Option value="es"> Español </Option>
                        <Option value="en"> Inglés </Option>
                    </Select>
                </div>
            </div>
        }
    ]
    const itemsCuenta = [
        {
            key: '1',
            label: 'Ajustes de la cuenta',
            children:
            <div>
                <div className='confirm-plan'>
                    <p>Permitir notificaciones</p>
                    <span className='spacer'></span>
                    <Switch></Switch>
                </div>
            </div>
        },
        {
            key: '2',
            label: 'Pedidos recientes',
            children:
            <div>
                {pedidos.map(function(producto, i){
                    return <>
                    <Card className='Card' bordered={false}>
                        <div className="fila">
                            <div>
                                <h1>{producto.name}</h1>
                                <p>{producto.desc}</p>
                                <span className='spacer'></span>
                            </div>
                            <div className='imageWrapper'>
                                <img src={producto.foto} alt="Foto del producto"></img>
                            </div>
                        </div>
                    </Card>
                    <br/>
                    </>
                })}
            </div>
        },
        {
            key: '3',
            label: 'Suscripción activa',
            children:
            <div>
                <Card className={suscripcion.style} title={suscripcion.label} bordered={false}>
                    <h1>{suscripcion.price}€</h1>
                    {suscripcion.desc}
                </Card>
            </div>
        }
    ]

    return (
    <Layout className='ContentLayout'>
        <Content className='Content'>
            <h1>Ajustes</h1>
            <br/>
            <p>Desde este apartado podrás configurar los ajustes de la interfaz.</p>
            <Collapse expandIconPosition="end" accordion items={items} />
            <Divider />
            
            <SignedOut>
                <p>Inicia sesión para ver los ajustes de tu cuenta.</p>
                <SignInButton>
                <Button>Iniciar Sesión</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <p>Desde este apartado podrás configurar los ajustes principales de tu cuenta.</p>
                <Collapse expandIconPosition="end" accordion items={itemsCuenta} />
            </SignedIn>
        </Content>
    </Layout>
    )
}
export default Settings