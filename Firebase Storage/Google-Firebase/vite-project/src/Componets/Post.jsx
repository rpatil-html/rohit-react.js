import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../Serivse/firebase';

const Post = () => {

    let initialState = {
        image: "",
        title: "",
        price: "",
        description: "",
        category: "",
    };

    const [formData, setFormData] = useState(initialState);

    const { image, price, title, description, category } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        postData();
    };

    const postData = () => {
        console.log("Data posted:", formData);
        addDoc(collection(db, "Product"), formData)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    };

    return (
        <div>
            <h2>Post Data</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name='title' type="text" placeholder='Title' value={title} />{" "}<br />
                <input onChange={handleChange} name='price' type="text" placeholder='Price' value={price} />{" "}<br />
                <input onChange={handleChange} name='description' type="text" placeholder='Description' value={description} />{" "}<br />
                <input onChange={handleChange} name='category' type="text" placeholder='Category' value={category} />{" "}<br />
                <input onChange={handleChange} name='image' type="text" placeholder='Image URL' value={image} />{" "}<br />
                <input type="submit" value="Submit" />
                
            </form>
            
        </div>
    );
}

export default Post;
