import React from 'react'
import { Carousel } from 'antd'

function CustomCarousel(){
    return(
    <Carousel autoplay>
        <div className="img-box">
            <h2>1. Copia la url de tu producto</h2>
        </div>
        <div className="img-box">
            <h2>2. Pega la url en la barra de búsqueda</h2>
        </div>
        <div className="img-box">
            <h2>3. Pulsa el botón HOLOGRAPH IT!</h2>
        </div>
        <div className="img-box">
            <h2>4. ¡Prueba el producto!</h2>
        </div>
    </Carousel>
    );
}

export default CustomCarousel;