import React from 'react';
import { Row, Col } from 'antd'

import '../HomePage.scss'

import logo from '../../../images/banner.png'

const Banner = () => {
	return (
		<div className='banner'>
			<Row className='no-gutters'>
				<Col span={8} className='Banner__coverImage Banner__cover-img-1'>
				</Col>
				<Col span={8} className='Banner__coverImage Banner__cover-img-2'>
					<div className='d-flex h-100 justify-content-center align-items-center'>
						<div className='logoBox'>
							<img src={logo}/>
						</div>
					</div>
				</Col>
				<Col span={8} className='Banner__coverImage Banner__cover-img-3'>
				</Col>
			</Row>
		</div> 
	);
}

export default Banner;