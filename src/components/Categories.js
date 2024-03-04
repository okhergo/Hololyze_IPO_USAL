import React from 'react';
import CustomCard from './Card';
import { Col, Row, Divider } from 'antd';
import './Categories.css';

function Categories (){
    return(
    <div>
        <Divider orientation="left">Prueba</Divider>
        <Row gutter={16}>
            <Col className="gutter-row" span={6}>
                <CustomCard></CustomCard>
            </Col>
            <Col className="gutter-row" span={6}>
                <CustomCard></CustomCard>
            </Col>
            <Col className="gutter-row" span={6}>
                <CustomCard></CustomCard>
            </Col>
        </Row>
    </div>
    );
}
export default Categories;

