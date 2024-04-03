import React from 'react'
import { Layout } from 'antd'
import { Col, Row,  } from 'antd';

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
  {name: "UCLA Gold", color: "#000a2e", hex: "#ffb400", size:6},
  {name: "Cool Black", color: "#f9fafd", hex: "#001e5f", size:6},
  {name: "Navy Blue", color: "#f9fafd", hex: "#003caa", size:4},
  {name: "Cetacean Blue", color: "#f9fafd", hex: "#000a2e", size:4},
  {name: "Ghost White", color: "#000a2e", hex: "#f9fafd", size:4},
]

const About = () => {
  return (
    <Layout className='ContentLayout'>
    <Content className='Content'>
        <h1>About us</h1>
        <h2>DESCRIPCIÓN</h2>
        <p>Hololyze es un proyecto de la asignatura Interacción Persona-Ordenador. Se trata de una aplicación
           web que busca mejorar el proceso de compra online, permitiendo probar los productos antes de
           comprarlos por medio de la ultimísima tecnología en hologramas.</p>
        <p>¿Sabías que Amazon tiene un total de 18.000 pedidos al día en España? De estos, 1 de cada 5 se 
           devuelven, mientras que en las tiendas esta cifra se reduce a un 9%.</p>
        <p>Con HOLOLYZE podrás probar los productos antes de comprarlos. Una innovadora tecnología por holograma
           a través del que podrás probar y visualizar el producto, incentivando la compra online y todos sus
           beneficios de la comodidad de comprar sin necesidad de salir de casa.</p>
        <h4>Hololyze: Holograph it!</h4>
        <h2>IDENTIDAD VISUAL</h2>
        <h3>Introducción</h3>
        <p>Presentamos la identidad visual de Hololyze, que pretende representar los valores de la marca, 
           uniendo los conceptos de la holografía y la paquetería, que definen los 3 pilares principales de
           este proyecto: </p>
        <h4>PRUEBA DE PRODUCTOS</h4>
        <p>Facilita la decisión de compra con el uso de sofisticados hologramas.</p>
        <h4>AHORRO DE TIEMPO</h4>
        <p>Evita comprar productos que no deseabas y papeleo innecesario.</p>
        <h4>ECO-FRIENDLY</h4>
        <p>Cuida el medio ambiente reduciendo los transportes por devoluciones.</p>
        <h3>Colores</h3>
        <p>Nuestra paleta de color cuenta con nuestros dos colores principales: UCLA Gold y Cool Black.</p>
        <h4>COOL BLACK #001e5f</h4>
        <p>Cool Black es un color azulado, que transmite profesionalismo, estabilidad y garantía, tal como 
           nuestro producto. Además, conecta con el mundo de la tecnología y en especial de la holografía por
           su aparición en películas de esta manera.</p>
        <h4>UCLA GOLD #ffb400</h4>
        <p>Por su parte el UCLA Gold, que une con el concepto de las cajas y los paquetes, transmite experiencia,
           seguridad y confiabilidad, como se asocia a las principales empresas de transporte y entidades financieras.</p>
        <h4>Complementarios</h4>
        <p>En adición, sumamos un Navy Blue como color de resalte, que completa la paleta cromática junto con el negro
           Cetacean Blue y el blanco Ghost White. Dos tonos con un ligero virado a azul, que favorecen su presentación y
           visibilidad en medios digitales, en lugar de los colores puros.</p>
          <br/>
          <Row gutter={[ 12 ]}>
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
        <h3>Tipografía</h3>
        <p>La familia tipografíca N27, de la fundición Atipo, es la elegida para representar a Hololyze.
           Una tipografía neogrotesca de corte rectangular sin serifa, que cuenta con un alto contraste
           en la unión de los vertices, convirtiéndola en una fuente con mucha personalidad pero sin perjudicar
           su gran legibilidad. Transmite un aspecto tecnológico y moderno, manteniendo una claridad que la
           hacen ideal para diseño web y editorial. Perfecta para transmitir los valores de marca de Hololyze.</p>
        <p className='tipography'>Aa</p>
        <h4>N27 REGULAR</h4>
        <p>A B C D E F G H Y J K L M N Ñ O P Q R S T U V W X Y Z<br/>
           a b c d e f g h y j k l m n ñ o p q r s t u v w x y z<br/>
           1 2 3 4 5 6 7 8 9 0 . : , ; - ( )</p>
        <h3>Logo</h3>
        <p>El logo de Hololyze surge de la abstración de tres elementos clave que caracterizan la marca:
           holograma, paquetes y la letra más característica de nuestra tipografía N27, la 'Y'. Así se construye
           un símbolo minimalista, que representa la esencia del proyecto y se adapta a la perfección a su
           presentación en medios digitales.</p>
        <div className='ImageContainer'><img src={logo_componentes} alt="Componentes del logo de Hololyze"/></div>
        <h4>CONSTRUCCIÓN</h4>
        <p>Su construcción se ha conseguido mediante una rejilla como se muestra, que iguala la altura de símbolo
           y logotipo, al que se le aplica un cierto desnivel en las letras de los extremos para continuar el concepto.</p> 
        <div className='ImageContainer'><img src={logo_construccion} alt="Construcción del logo de Hololyze"/></div>
        <h4>TAGLINE</h4>
        <p>Presentamos el logo de Hololyze en su versión con tagline: "Holograph it!", holografíalo.</p>
        <br/>
        <div className='ImageContainer'><img src={logo_tagline} alt="Logo de Hololyze con tagline"/></div>
        <h4>VERSIÓN VERTICAL</h4>
        <p>Versiones del logo en formato vertical unicolor y full color</p>
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
        <h4>VERSIÓN HORIZONTAL</h4>
        <p>Versiones del logo en formato horizontal unicolor y full color</p>
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
        <h4>SÍMBOLO</h4>
        <p>Versiones del símbolo con colores corporativos</p>
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
        <h2>EQUIPO DE TRABAJO</h2>
        <p>Este grupo está formado por Eduardo Juanes Ramos y Óscar Hernández Gómez de tercero del 
           Grado en Ingeniería Informática del grupo PA2, impartido por Luis Augusto Silva los
           viernes en el horario de 10:00 a 13:00 de la mañana en el Aula de Informática 6 de la
           Facultad de Ciencias en el edificio de La Merced.</p>
    </Content>
    </Layout>
  )
}
export default About