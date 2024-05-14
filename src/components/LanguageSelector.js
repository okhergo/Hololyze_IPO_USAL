import React from "react"
import { useTranslation } from "react-i18next"
import GlobalOutlined from '@ant-design/icons'
import { Dropdown, Button } from 'antd'

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()
    
    const items = [
        {
        key: '1',
        label: <Button onClick={() => i18n.changeLanguage('es')}>ES</Button>
        },
        {
        key: '2',
        label: <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
        },
    ]

    return (
        <Dropdown menu={{ items }}>
            <Button type="primary" shape="circle" icon={<GlobalOutlined />} />
        </Dropdown>
    )
}
export default LanguageSelector