import React from 'react';
import { Carousel } from 'antd';
import './Carousel.css'

function CustomCarousel(){
    return(
    <Carousel autoplay>
        <div class="img-box">
            <img alt="Tecnología" src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/5ea5b7e6-3727-4321-8ff8-b61ff488eeaf.__CR0,24,970,600_PT0_SX970_V1___.jpg"></img>
            <h2>Tecnología</h2>
        </div>
        <div class="img-box">
            <img src="https://vellanova.com/product_images/uploaded_images/consejos-para-aliviar-la-piel-seca.jpg"></img>
            <h2>Cuidado personal</h2>
        </div>
        <div class="img-box">
            <img src="https://seguros.elcorteingles.es/content/dam/eci-seguros/es/blog/blog-julio-2023/incluir-mascota-seguro-hogar.jpg"></img>
            <h2>Mascotas</h2>
        </div>
        <div class="img-box">
            <img src="https://www.cleanipedia.com/images/yvwvo5xgjuhg/29uclsNDJYZMr2K6qxa0wx/ed7e11a4d742e39e31aa5ca3aab936b5/Q2xlYW5pcGVkaWFfQV9DbGV2ZXJfV2F5X3RvX0JyaWdodGVuX1doaXRlX0Nsb3RoZXMtSGVyb19JbWFnZV9fMV8uanBn/1200w/a-clever-way-to-brighten-white-clothes.jpg"></img>
            <h2>Ropa</h2>
        </div>
    </Carousel>
    );
}

export default CustomCarousel;