import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { phonesData } from './product.data'
import appleImg from '../../assets/apple.png';
import nothingImg from '../../assets/nothing.jpg';
import pixelImg from '../../assets/pixel.jpg';
import redmiImg from '../../assets/redmi.jpg';
import samsungImg from '../../assets/samsung.jpg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const Product = () => {
  const [items] = useState(phonesData)

  const images = {
    apple: appleImg,
    nothing: nothingImg,
    pixel: pixelImg,
    redmi: redmiImg,
    samsung: samsungImg
  }

  return (
    <>
    <div>
     <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </div>
      <h1 className='bg-success text-white  shadow-lg p-3 m-2'>Products</h1>
      {items.map((item, index) => (
        <div className='d-inline-block'>
        <Card key={index} className="shadow-lg p-3 m-2 bg-body-tertiary rounded" style={{ width: '13rem' }}>
          
          <Card.Img style={{ width: '13rem' }} className="p-2" variant="top" src={images[item.image]} alt={item.model} />
          <Card.Body>
            <Card.Title>{item.model}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            <h5>${item.price}</h5>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        
        </div>
         
      ))}
    </>
  )
}

export default Product
