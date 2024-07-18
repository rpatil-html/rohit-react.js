import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


  const Description =()=>{
    const[Productdata,setProductdata]=useState([]);
const {id}=useParams()

       useEffect(()=>{
       fetch(`https://fakestoreapi.com/products/${id}`)
       .then((res)=>res.json())
       .then((data)=>{
        setProductdata(data)
       })
       .catch((err)=>console.log(err))
       },[]);
    return (
      <div>
      <h1>Description</h1>
      <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem'}}>
          <Card.Body>
          <Card>{Productdata.id}</Card>
            <Card><img src={Productdata.image} alt="" /></Card>
            <Card.Title>{Productdata.title}</Card.Title>
            <Card>{Productdata.price}</Card>
            <Card.Text>
            {Productdata.category}
            </Card.Text>
            <Card >{Productdata.description}</Card>
            
          </Card.Body>
        </Card>

      </div>
    </div>
    )
   
  }


export default Description
