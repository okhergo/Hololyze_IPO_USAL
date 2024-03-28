import React from 'react'
import { Carousel } from 'antd'
import background from '../assets/Background.png'

function CustomCarousel(){
    return(
    <Carousel autoplay>
        <div className="img-box">
            <img alt="Background" src={background}></img>
            <h2>1. Copia la url de tu producto</h2>
        </div>
        <div className="img-box">
            <img alt="Background" src={background}></img>
            <h2>2. Pega la url en nuestra barra de búsqueda</h2>
        </div>
        <div className="img-box">
            <img alt="Background" src={background}></img>
            <h2>3. Pulsa el botón HOLOGRAPH IT!</h2>
        </div>
        <div className="img-box">
            <img alt="Background" src={background}></img>
            <h2>4. ¡Prueba el producto!</h2>
        </div>
    </Carousel>
    );
}

export default CustomCarousel;