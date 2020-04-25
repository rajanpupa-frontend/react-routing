import React, {useState, useEffect} from 'react';
import '../App.css';
import {Link} from "react-router-dom";

function Shop() {
    useEffect(()=> {
        fetchItems()
    },[]);

    // state
    const [items, setItems] = useState([]);

    const fetchItems = async() =>{
        const data = await fetch('https://rickandmortyapi.com/api/location/');
        const response = await data.json();
        const items = await response.results;
        console.log(items);
        setItems(items);
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.id}>
                    <Link to={`/shop/${item.id}` } > {item.name} </Link>
                </h1>
            ))};
        </div>
    );
}

export default Shop;
