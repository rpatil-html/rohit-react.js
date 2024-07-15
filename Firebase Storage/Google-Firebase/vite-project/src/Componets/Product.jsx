import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Product = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get("https://fakestoreapi.com/products")
        .then((res) => {
            setData(res.data) 
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>Product</h1>
            {data.map((e) => (
                <div key={e.id}>
                    <img src={e.image} alt="" style={{ width:'200px',height:"200px" }} />
                    <h2 style={{fontSize:"15px"}}>{e.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Product
