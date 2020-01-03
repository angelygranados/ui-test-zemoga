import React, {useState, useEffect} from 'react';
import '../assets/styles/Home.scss';
import Header from '../components/Header';
import CTA from '../components/CTA';
import Votes from '../components/Votes';
import Item from '../components/Item';
 

const Home = () => {
    const initialState = [
        {
          "name": "Kanye West",
          "category": "Entertainment",
          "description": "Vestibulum Diam ante, porttito a odio eget, rhoncus neque. Aenean eu velit libero.",
          "id": 1,
          "image": "http://2.bp.blogspot.com/-BrsA2ddynZA/UvDBeDeyguI/AAAAAAAAAdk/FHBn3zkfoOg/s1600/Kanye-West-chartsong.jpeg",
          "likes": 5,
          "dislikes": 4
        },
        {
          "name": "Mark Zuckerberg",
          "category": "Business",
          "description": "Thank you for voting!",
          "id": 2,
          "image": "https://cdn.britannica.com/54/187354-050-BE0530AF/Mark-Zuckerberg.jpg",
          "likes": 3,
          "dislikes": 6
        },
        {
          "name": "Cristina Fernández de  Kirchner",
          "category": "Politics",
          "description": "Vestibulum Diam ante, porttito a odio eget, rhoncus neque. Aenean eu velit libero.",
          "id": 3,
          "image": "https://secure.i.telegraph.co.uk/multimedia/archive/02102/cristina_2102663b.jpg",
          "likes": 6,
          "dislikes": 4
        },
        {
          "name": "Malala Yousafzai",
          "category": "Entertainment",
          "description": "Vestibulum Diam ante, porttito a odio eget, rhoncus neque. Aenean eu velit libero.",
          "id": 4,
          "image": "https://tecreview.tec.mx/wp-content/uploads/2017/08/PRINCIPAL-MALALA.png",
          "likes": 5,
          "dislikes": 5
        }
      ]
    
    return(
    <div className="container">
        <Header/>
        <CTA/>
        <Votes>
            {initialState.map(item => 
              <Item key={item.id}
              handleCount = {`initialState[${item.id} -1].likes = initialState[${item.id-1}].likes + 1`}
              {...item}/>)}
        </Votes>   
    </div>
    )  
};

export default Home