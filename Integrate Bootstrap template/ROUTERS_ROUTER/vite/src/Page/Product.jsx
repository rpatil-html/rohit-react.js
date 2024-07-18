import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false); 
            });
    }, []);

    return loading ? <h1>Loading....</h1> : (
        <div>
            <h1>Product Page</h1>

            {/* Data map */}
            <div className='map'>
                {data.map((el) => (
                    <div key={el.id}>
                        <Link to={`/Description/${el.id}`}>
                            <Card style={{ width: '20rem', border: "2px solid black" }}>
                                <Card.Img variant="top" src={el.image} style={{ height: "200px", width: "200px", paddingLeft: "25%" }} />
                                <Card.Body>
                                    <Card.Text>{el.id}</Card.Text>
                                    <Card.Title>{el.title}</Card.Title>
                                    <Card.Text>${el.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
