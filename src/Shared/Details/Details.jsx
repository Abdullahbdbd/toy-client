import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();
    const { toy_name, seller_name, section, price, available_quantity, img_url
        , seller_email, rating} = data;
    return (
        <div>
            <div className="card max-w-7xl mx-auto my-10 bg-blue-50">
                <figure><img className='h-96' src={img_url} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {toy_name}</h2>
                    <h2 className="card-title">Seller Name: {seller_name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {available_quantity}</p>
                    <p>Section: {section}</p>
                    <p>Seller Email: {seller_email}</p>
                    <p>Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;