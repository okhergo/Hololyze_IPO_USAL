import React from 'react'
import { Layout } from 'antd'
import logo from '../assets/logo_azul.png'
import { Col, Row,  } from 'antd';

const { Content } = Layout

const About = () => {
  return (
    <Content className='Content'>
        <h1>About us</h1>
        <h2>DESCRIPCIÓN</h2>
        <p>Hololyze es un proyecto de la asignatura Interacción Persona-Ordenador. Se trata de una aplicación que permite probar productos online antes de comprarlos por medio de la ultimísima tecnología en hologramas.</p>
        <h2>IDENTIDAD VISUAL</h2>
        <h3>Introducción</h3>
        <p>Presentamos la identidad visual de Hololyze, que une los conceptos de la holografía y la paquetería, que definen los 3 pilares principales de este proyecto: el uso de hologramas para probar los productos antes de comprarlos, ahorrando tiempo y cuidando el medio ambiente con el ahorro de devoluciones.</p>
        <h3>Colores</h3>
        <p>Seleccionamos una amplia paleta de color compuesta por una escala de azules, que conecta con el mundo de la tecnología y en especial de la holografía por su aparición en películas, acompañado de un naranja como color de resalte, que une con el concepto de las cajas y los paquetes.</p>
        <Row gutter={[ 18,18 ]}>
            <Col span={6}>
              <div className='PrimaryOrange'>UCLA Gold: Hex #ffb400</div>
            </Col>
            <Col span={6}>
              <div className='PrimaryBlue'>Cool Black: Hex #001e5f</div>
            </Col>
            <Col span={4}>
              <div className='DarkBlue'>Cetacean Blue: Hex #000a2e</div>
            </Col>
            <Col span={4}>
              <div className='AccentBlue'>Navy Blue: Hex #090082</div>
            </Col>
            <Col span={4}>
              <div className='White'>Ghost White: Hex #f9fafd</div>
            </Col>
        </Row>
        <br/>
        <h3>Tipografía</h3>
        <p>Como tipografía nos decantamos por la familia N27, una tipografía sin serifa que transmite un aspecto tecnológico pero que tiene muy buena legibilidad y transmite un punto de seriedad y modernidad</p>
        <p>N27 Regular</p>
        <p>A B C D E F G H Y J K L M N Ñ O P Q R S T U V W X Y Z</p>
        <p>a b c d e f g h y j k l m n ñ o p q r s t u v w x y z</p>
        <p>1 2 3 4 5 6 7 8 9 0 . : , ; - ( )</p>
        <h3>Logo</h3>
        <p>El logo es una abstración que representa la esencia de este proyecto, con un símbolo minimalista que se adapta a la perfección a las nuevas tecnologías y su presentación en medios digitales. El logo representa la típica representación holográfica de las películas, al mismo tiempo que simboliza los extremos plegables de un paquete y utiliza la misma forma de la letra 'Y', la cual es la más representativa de nuestra tipografía N27.</p>
        <div className='img-box'>
          <img className='LogoAbout' src={logo} alt="Logo Hololyze"></img>
        </div>
        <h2>MOCKUPS</h2>
        <p>En proceso...</p>
        <h2>EQUIPO DE TRABAJO</h2>
        <p>Este grupo está formado por Eduardo Juanes Ramos y Óscar Hernández Gómez de tercero del Grado en Ingeniería Informática del grupo PA2, impartido por Luis Augusto Silva (Dios) los viernes en el horario de 10:00 a 13:00 de la mañana en el Aula de Informática 6 de la Facultad de Ciencias en el edificio de La Merced.</p>
    </Content>
  )
}
export default About