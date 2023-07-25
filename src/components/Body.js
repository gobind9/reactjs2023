import {React, useState} from "react";
import { restaurantList, IMG_CDN_URL } from "../utiils/constants";



const RestaurantCard =({id, name, cloudinaryImageId, avgRating }) => {
   
    return (
            <div className='restaurant-card' >
            <img style = {{width:'100px'}} src={IMG_CDN_URL+cloudinaryImageId} alt="product"></img>
            <span>{name}</span>
         </div>
    );
};

const Body = () =>{

    const [searchText, setSearchText] = useState('');

    const [restaurants, setRestrautants] = useState(restaurantList);

    const searchRestaurants =  (restaurantsData, searchText) => {
        const filterData = restaurantsData.filter((restaurant) =>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
        setRestrautants(filterData);
    }
   
 return (<div>
    <div>
        <input type='text' value={searchText} placeholder="Search Restaurant" onChange= {(e)=>  setSearchText(e.target.value)}/> 
        <button onClick={ () => searchRestaurants(restaurantList, searchText)}> Search</button>

    </div>
    <div className='restaurant-container'>
        {
            restaurants.map((restaurant) => {
              return ( <RestaurantCard {...restaurant.data} key={restaurant.data.id}  />);
            })
        }
    </div>
 </div>);
};

export default Body;