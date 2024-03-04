import React from 'react';
import CustomCard from './Card';
import { Col, Row } from 'antd';
import './Categories.css';

function Categories (){
    return(
    <Row>
        <Col span={24/3}>
            <CustomCard></CustomCard>
        </Col>
        <Col span={24/3}>
            <CustomCard></CustomCard>
        </Col>
        <Col span={24/3}>
            <CustomCard></CustomCard>
        </Col>
    </Row>
    );
}
export default Categories;

