import React from "react"
import { useTranslation } from "react-i18next"
import { GlobalOutlined } from '@ant-design/icons'
import { Dropdown, message } from 'antd'
import ReactCountryFlag from "react-country-flag"

const LanguageSelector = () => {
    const { t,i18n } = useTranslation()
    
    const handleOnClick = (e) => {
        i18n.changeLanguage(e.key)
        message.info(t('languageChanged'))
    }

    const items = [
        {
        key: 'es',
        label: <p><ReactCountryFlag countryCode="ES" />Español</p>
        },
        {
        key: 'en',
        label: <p><ReactCountryFlag countryCode="GB" />English</p>
        },
        {
        key: 'pt',
        label: <p><ReactCountryFlag countryCode="PT" />Português</p>
        },
    ]

    return (
        <Dropdown menu={{ onClick: handleOnClick, items: items }}>
            <GlobalOutlined />
        </Dropdown>
    )
}
export default LanguageSelector