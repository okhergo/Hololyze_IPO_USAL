import React from "react"
import { useTranslation } from "react-i18next"
import DownOutlined from '@ant-design/icons'
import { Dropdown, message, Button } from 'antd'

const LanguageSelector = () => {
    const onClick = ({ key }) => {
        message.info(`Language changed to ${key}`)
        i18n.changeLanguage(key)
    }
    const { i18n } = useTranslation()
    
    const items = [
        {
        key: 'ES',
        label: <Button onClick={() => onClick('es')}>ES</Button>
        },
        {
        key: 'EN',
        label: <Button onClick={() => onClick('en')}>EN</Button>
        },
    ]

    return (
        <Dropdown menu={{ items }}>
            <Button type="primary" icon={<DownOutlined />}/>
        </Dropdown>
    )
}
export default LanguageSelector