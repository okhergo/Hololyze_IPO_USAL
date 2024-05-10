import React from 'react'
import { Layout, Switch} from 'antd'
import '../index.css'

const { Content } = Layout

const onChange = (checked) => {
    console.log(`switch to ${checked}`)
    if(!checked) lightMode()
    else darkMode()
}
const darkMode = () =>{
    let element = document.body
    element.className = "body-dark-mode"
}
const lightMode = () =>{
    let element = document.body
    element.className = "body-light-mode"
}

const Settings = () => {
    return (
    <Layout className='ContentLayout'>
        <Content className='Content'>
            <h1>Ajustes</h1>
            <p>Modo Oscuro: </p>
            <Switch onChange={onChange}></Switch>
        </Content>
    </Layout>
    )
}
export default Settings