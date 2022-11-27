import React from 'react'
import { Container,Row,Col,Card,Spinner} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
const Photos =()=>{
    const [photos,setPhoto] = useState([])


     useEffect(()=>{

      axios
      .get('https://picsum.photos/v2/list')
      .then((res)=>  setPhoto(res.data))
      .catch((err)=>  console.log(err))

     },[]) 

  return (
    <Container className="m-0 w-100">


      
    <Row className="m-0 w-100">
     {photos.length ?   photos.map((photo)=>(
                
                <Col md = {3} className = "mt-2 mb-2 "  key= {photo.id}>
                <Card style={{ width: '17rem' ,textAlign:'center'}}>
                <Card.Img variant="top" src={photo.download_url} />
                <Card.Body>
                <Card.Title>{photo.author}</Card.Title>
                 <a href={photo.url} 
               className='btn btn-dark btn-sm' style={{margin:'0 5px'}}>
                  View Details
                  </a>
                  <Link to = {`/pic/${photo.id}`}
               className='btn btn-dark btn-sm' style={{margin:'0 5px'}}>
                  View enlarged 
                  </Link>
               
              </Card.Body>
              </Card>
                </Col>
     )) : (

      <Spinner animation="border" role="status" style={{margin: "200px auto"}}>
      <span className="visually-hidden" >Loading...</span>
      </Spinner>
     )}
   
    </Row>
   </Container>
  )
}

export default Photos