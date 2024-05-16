import React from 'react'
import { Layout } from 'antd'
import { Col, Row,  } from 'antd'
import { useTranslation } from 'react-i18next'

//Logo vertical
import V_Unicolor_Azul from "../assets/logo/Vertical/Unicolor/Azul.webp"
import V_Unicolor_Blanco from "../assets/logo/Vertical/Unicolor/Blanco.webp"
import V_Unicolor_Negro from "../assets/logo/Vertical/Unicolor/Negro.webp"
import V_FullColor_FondoAzul from "../assets/logo/Vertical/FullColor/FullColor_FondoAzul.webp"
import V_FullColor_FondoBlanco from "../assets/logo/Vertical/FullColor/FullColor_FondoBlanco.webp"
import V_FullColor_FondoNaranja from "../assets/logo/Vertical/FullColor/FullColor_FondoNaranja.webp"

//Logo horizontal
import H_Unicolor_Azul from "../assets/logo/Horizontal/Unicolor/Azul.webp"
import H_Unicolor_Blanco from "../assets/logo/Horizontal/Unicolor/Blanco.webp"
import H_Unicolor_Negro from "../assets/logo/Horizontal/Unicolor/Negro.webp"
import H_FullColor_FondoAzul from "../assets/logo/Horizontal/FullColor/FullColor_FondoAzul.webp"
import H_FullColor_FondoBlanco from "../assets/logo/Horizontal/FullColor/FullColor_FondoBlanco.webp"
import H_FullColor_FondoNaranja from "../assets/logo/Horizontal/FullColor/FullColor_FondoNaranja.webp"

//Simbolo
import S_Negro from "../assets/logo/Simbolo/Negro.webp"
import S_Blanco from "../assets/logo/Simbolo/Blanco.webp"
import S_Naranja from "../assets/logo/Simbolo/Naranja.webp"
import S_Azul from "../assets/logo/Simbolo/Azul.webp"

import logo_construccion from '../assets/logo_construccion.webp'
import logo_componentes from '../assets/logo_componentes.png'
import logo_tagline from '../assets/logo/logo_tagline.webp'
import mockup1 from '../assets/mockup1.png'
import mockup2 from '../assets/mockup2.png'
import mockup3 from '../assets/mockup3.png'
import mockup4 from '../assets/mockup4.png'

const { Content } = Layout

const logo_vertical = [
  {uri: V_Unicolor_Azul, name: "V_Unicolor_Azul", color: "#f9fafd"},
  {uri: V_Unicolor_Blanco, name: "V_Unicolor_Blanco", color: "#001e5f"},
  {uri: V_Unicolor_Negro, name: "V_Unicolor_Negro", color: "#ffb400"},
  {uri: V_FullColor_FondoBlanco, name: "V_FullColor_FondoBlanco", color: "#f9fafd"},
  {uri: V_FullColor_FondoAzul, name: "V_FullColor_FondoAzul", color: "#001e5f"},
  {uri: V_FullColor_FondoNaranja, name: "V_FullColor_FondoNaranja", color: "#ffb400"},
]

const logo_horizontal = [
  {uri: H_Unicolor_Azul, name: "H_Unicolor_Azul", color: "#f9fafd"},
  {uri: H_Unicolor_Blanco, name: "H_Unicolor_Blanco", color: "#001e5f"},
  {uri: H_Unicolor_Negro, name: "H_Unicolor_Negro", color: "#ffb400"},
  {uri: H_FullColor_FondoBlanco, name: "H_FullColor_FondoBlanco", color: "#f9fafd"},
  {uri: H_FullColor_FondoAzul, name: "H_FullColor_FondoAzul", color: "#001e5f"},
  {uri: H_FullColor_FondoNaranja, name: "H_FullColor_FondoNaranja", color: "#ffb400"},
]

const simbolo = [
  {uri: S_Azul, name: "S_Negro", color: "#f9fafd"},
  {uri: S_Blanco, name: "S_Blanco", color: "#001e5f"},
  {uri: S_Negro, name: "S_Naranja", color: "#ffb400"},
  {uri: S_Naranja, name: "S_Azul", color: "#f9fafd"},
  {uri: S_Naranja, name: "S_Azul", color: "#001e5f"},
  {uri: S_Azul, name: "S_Azul", color: "#ffb400"},
]

const colors = [
  {name: "UCLA Gold", color: "#000a2e", hex: "#ffb400", size:12},
  {name: "Cool Black", color: "#f9fafd", hex: "#001e5f", size:12},
  {name: "Navy Blue", color: "#f9fafd", hex: "#003caa", size:8},
  {name: "Cetacean Blue", color: "#f9fafd", hex: "#000a2e", size:8},
  {name: "Ghost White", color: "#000a2e", hex: "#f9fafd", size:8},
]

const About = () => {
  const { t } = useTranslation()
  return (
    <Layout className='ContentLayout'>
    <Content className='Content'>
        <h1>{t('aboutUsTitle')}</h1>
        <h2>{t('descriptionTitle')}</h2>
        <p>{t('description1')}</p>
        <p>{t('description2')}</p>
        <p>{t('description3')}</p>
        <h4>Hololyze: Holograph it!</h4>
        <h2>{t('visualTitle')}</h2>
        <h3>{t('introductionTitle')}</h3>
        <p>{t('introduction')}</p>
        <h4>{t('introTitleStatement1')}</h4>
        <p>{t('introStatement1')}</p>
        <h4>{t('introTitleStatement2')}</h4>
        <p>{t('introStatement2')}</p>
        <h4>ECO-FRIENDLY</h4>
        <p>{t('introStatement3')}</p>
        <h3>Colores</h3>
        <p>{t('colors')}</p>
        <h4>COOL BLACK #001e5f</h4>
        <p>{t('colorsBlack')}</p>
        <h4>UCLA GOLD #ffb400</h4>
        <p>{t('colorsGold')}</p>
        <h4>{t('colorsAuxTitle')}</h4>
        <p>{t('colorsAux')}</p>
          <br/>
          <Row gutter={[ 8, 8 ]}>
          {Array.from({ length: 5 }).map((_, i) => (
          <Col key={i} span={colors[i].size}>
            <div className='Color' style={{color:colors[i].color, background:colors[i].hex}}>
              <h3>{colors[i].hex}</h3>
              <p>{colors[i].name}</p>
            </div>
          </Col>
          ))}
        </Row>
        <br/>
        <h3>{t('typographyTitle')}</h3>
        <p>{t('typography')}</p>
        <p className='tipography'>Aa</p>
        <h4>N27 REGULAR</h4>
        <p>A B C D E F G H Y J K L M N Ñ O P Q R S T U V W X Y Z<br/>
           a b c d e f g h y j k l m n ñ o p q r s t u v w x y z<br/>
           1 2 3 4 5 6 7 8 9 0 . : , ; - ( )</p>
        <h3>Logo</h3>
        <p>{t('logo')}</p>
        <div className='ImageContainer'><img src={logo_componentes} alt="Componentes del logo de Hololyze"/></div>
        <h4>{t('constructionTitle')}</h4>
        <p>{t('construction')}</p> 
        <div className='ImageContainer'><img src={logo_construccion} alt="Construcción del logo de Hololyze"/></div>
        <h4>TAGLINE</h4>
        <p>{t('tagline')}</p>
        <br/>
        <div className='ImageContainer'><img src={logo_tagline} alt="Logo de Hololyze con tagline"/></div>
        <h4>{t('verticalVersionTitle')}</h4>
        <p>{t('verticalVersion')}</p>
        <Row gutter={[ 20,20 ]}>
          {Array.from({ length: 6 }).map((_, i) => (
          <Col key={i} span={8}>
            <div className='logo-box' style={{background:logo_vertical[i].color}}>
              <img src={logo_vertical[i].uri} alt={logo_vertical[i].name}></img>
            </div>
          </Col>
          ))}
        </Row>
        <br/>
        <h4>{t('horizontalVersionTitle')}</h4>
        <p>{t('horizontalVersion')}</p>
        <Row gutter={[ 20,20 ]}>
          {Array.from({ length: 6 }).map((_, i) => (
          <Col key={i} span={12}>
            <div className='logo-box' style={{background:logo_horizontal[i].color}}>
              <img src={logo_horizontal[i].uri} alt={logo_horizontal[i].name}></img>
            </div>
          </Col>
          ))}
        </Row>
        <br/>
        <h4>{t('symbolTitle')}</h4>
        <p>{t('symbol')}</p>
        <Row gutter={[ 20,20 ]}>
          {Array.from({ length: 6 }).map((_, i) => (
          <Col key={i} span={8}>
            <div className='logo-box' style={{background:simbolo[i].color}}>
              <img src={simbolo[i].uri} alt={simbolo[i].name}></img>
            </div>
          </Col>
          ))}
        </Row>
        <h2>MOCKUPS</h2>
        <img className='Image' src={mockup1} alt="Mockup de cartel Hololyze"/>
        <img className='Image' src={mockup4} alt="Mockup de ordenador Hololyze"/>
        <img className='Image' src={mockup2} alt="Mockup de tarjeta de visita Hololyze"/>
        <img className='Image' src={mockup3} alt="Mockup de camiseta Hololyze"/>
        <h2>{t('teamTitle')}</h2>
        <p>{t('team')}</p>
    </Content>
    </Layout>
  )
}
export default About