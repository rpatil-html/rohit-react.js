import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import {db} from "../Serivse/firebase"

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchDataFromFirebaseStore = () => {
    getDocs(collection(db, 'Product'))
      .then((res) => {
        let filterData = res.docs.map((el) => ({ ...el.data(), id: el.id }));
        setProducts(filterData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
   console.log(id)
   deleteDoc(doc(db, "Product", id))
   .then((res)=>{
    console.log(res)
    fetchDataFromFirebaseStore()
   })
   .catch((err)=>{
    console.log(err)
   })
  };

  useEffect(() => {
    fetchDataFromFirebaseStore();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {products.map((product) => (
        <div key={product.id} style={{ border: '2px solid white', height: '550px', width: '50%', paddingTop: '15px' }}>
          <img src={product.image} alt="" height={200} width={200} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() =>  handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
