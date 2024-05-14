import React, {useState, useContext} from 'react'
import { Layout, Switch, Collapse, Select } from 'antd'
import '../index.css'
import { ThemeContext } from '../contexts/theme'

const { Option } = Select
const { Content } = Layout

const Settings = () => {
    const [selectedValue, setSelectedValue] = useState('ES')
    
    const handleChange = (value) => {
        setSelectedValue(value)
    }
    const [{ themeName, toggleTheme }] = useContext(ThemeContext)
    
    const items = [
        {
            key: '1',
            label: 'Apariencia',
            children:
            <div>
                <div className='confirm-plan'>
                    <p>Activar/desactivar el modo oscuro</p>
                    <span className='spacer'></span>
                    <Switch onChange={toggleTheme}></Switch>
                </div>
                <div className='confirm-plan'>
                    <p>Cambiar el idioma de la aplicación</p>
                    <span className='spacer'></span>
                    <Select value={selectedValue} onChange={handleChange}>
                        <Option value="ES"> Español </Option>
                        <Option value="EN"> Inglés </Option>
                    </Select>
                </div>
            </div>
        },
        {
            key: '2',
            label: 'Ajustes de la cuenta',
            children:
            <div>
                <div className='confirm-plan'>
                    <p>Permitir notificaciones</p>
                    <span className='spacer'></span>
                    <Switch onChange={""}></Switch>
                </div>
            </div>
        },
        {
            key: '3',
            label: 'Pedidos recientes',
            children:
            <div>
                
            </div>
        },
        {
            key: '4',
            label: 'Suscripción activa',
            children:
            <div>
                
            </div>
        }
    ]

    return (
    <Layout className='ContentLayout'>
        <Content className='Content'>
            <h1>Ajustes</h1>
            <br/>
            <p>Desde este apartado podrás configurar los ajustes principales de tu cuenta.</p>
            <Collapse expandIconPosition="end" accordion items={items} />
        </Content>
    </Layout>
    )
}
export default Settings