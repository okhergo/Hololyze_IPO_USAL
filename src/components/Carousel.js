import React from 'react'
import { Carousel } from 'antd'

function CustomCarousel(){
    return(
    <Carousel autoplay>
        <div className="img-box">
            <h1>1</h1>
            <h3>Copia la url de tu producto</h3>
        </div>
        <div className="img-box">
            <h1>2</h1>
            <h3>Pega la url en la barra de búsqueda</h3>
        </div>
        <div className="img-box">
            <h1>3</h1>
            <h3>Pulsa en HOLOGRAPH IT!</h3>
        </div>
        <div className="img-box">
            <h1>4</h1>
            <h3>¡Prueba el producto!</h3>
        </div>
    </Carousel>
    )
}
export default CustomCarousel