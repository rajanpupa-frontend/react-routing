import React, {useState, useEffect} from 'react';

function ItemDetail({match}) {

    useEffect(()=> {
        fetchItem();
        console.log(match);
    },[]);

    // state
    const [item, setItem] = useState({});

    const fetchItem = async() =>{
        const fetchItem = await fetch(
            `https://rickandmortyapi.com/api/location/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }

    return (
        <div >
            <h1> {item.name} </h1>
            <div>
                <div className="row">Dimension: {item.dimension}</div>
                <div className="row">Type: {item.type}</div>
            </div>
        </div>
    );
}

export default ItemDetail;
