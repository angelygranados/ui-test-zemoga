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
          "image": "http://2.bp.blogspot.com/-BrsA2ddynZA/UvDBeDeyguI/AAAAAAAAAdk/FHBn3zkfoOg/s1600/Kanye-West-chartsong.jpeg"
        },
        {
          "name": "Mark Zuckerberg",
          "category": "Business",
          "description": "Thank you for voting!",
          "id": 2,
          "image": "https://cdn.britannica.com/54/187354-050-BE0530AF/Mark-Zuckerberg.jpg"
        },
        {
          "name": "Cristina Fernández de  Kirchner",
          "category": "Politics",
          "description": "Vestibulum Diam ante, porttito a odio eget, rhoncus neque. Aenean eu velit libero.",
          "id": 3,
          "image": "https://secure.i.telegraph.co.uk/multimedia/archive/02102/cristina_2102663b.jpg"
        },
        {
          "name": "Malala Yousafzai",
          "category": "Entertainment",
          "description": "Vestibulum Diam ante, porttito a odio eget, rhoncus neque. Aenean eu velit libero.",
          "id": 4,
          "image": "https://tecreview.tec.mx/wp-content/uploads/2017/08/PRINCIPAL-MALALA.png"
        }
      ]
   
    return(
    <div className="container">
        <Header/>
        <CTA/>
        <Votes>
            {initialState.map(item => 
              <Item key={item.id}
              {...item}/>)}
        </Votes>   
    </div>
    )  
};

export default Home