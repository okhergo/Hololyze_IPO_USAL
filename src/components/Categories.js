import React from 'react';
import CustomCard from './Card';
import { Divider } from 'antd';
import "./Categories.css"

function Categories (){
    return(
    <div>
        <Divider orientation="left">Prueba</Divider>
        <div class="flex-container">
            <CustomCard class="row"></CustomCard>
            <CustomCard class="row"></CustomCard>
            <CustomCard class="row"></CustomCard>
        </div>
    </div>
    );
}
export default Categories;

