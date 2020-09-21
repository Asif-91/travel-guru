import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../fakeData/fakeData'
import PlacesCard from '../PlacesCard/PlacesCard';

const Home = () => {
    const {placeId} = useParams([{}])
    console.log(placeId)

    const [selectedPlaces, setSelectedPlaces] = useState([])
    

    useEffect(() => {
        const filteredPlace = fakeData.filter(place => place.key === placeId )
        setSelectedPlaces(filteredPlace);
        console.log(filteredPlace)
    }, [placeId])

    return (
        <div>
           {
               selectedPlaces.map(places =><PlacesCard places={places}></PlacesCard>)
           } 
        </div>
    );
};

export default Home;