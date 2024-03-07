import React from 'react';
import CustomCard from './Card';
import { Col, Row,  } from 'antd';

const Categories = () =>{
    return(
        <Row gutter={[ 16,16 ]}>
            {Array.from({ length: 4 }).map((_, i) => (
            <Col key={i} span={6}>
                <CustomCard></CustomCard>
            </Col>
            ))}
      </Row>
    );
}
export default Categories;

