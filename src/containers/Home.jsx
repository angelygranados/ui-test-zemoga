import React from 'react';
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
          "image": "https://www.georgetown.edu/wp-content/uploads/2019/10/ZuckerbergFI-2000x1125.jpg"
        },
        {
          "name": "Cristina Fernández de  Kirchner",
          "category": "Politics",
          "description": "Vestibulum Diam ante, porttito a odio eget, rhoncus neque. Aenean eu velit libero.",
          "id": 3,
          "image": "https://elintransigente.com/wp-content/uploads/2019/05/cristina-fernandez-de-kirchner.jpg"
        },
        {
          "name": "Malala Yousafzai",
          "category": "Entertainment",
          "description": "Vestibulum Diam ante, porttito a odio eget, rhoncus neque. Aenean eu velit libero.",
          "id": 4,
          "image": "https://i.pinimg.com/originals/15/3f/67/153f67cb195fe1472d001b7f3c377875.jpg"
        }
      ]
    return(
    <div className="container">
        <Header/>
        <CTA/>
        <Votes>
            {initialState.map(item => <Item key={item} {...item}/>)}
        </Votes>   
    </div>
    )  
};

export default Home