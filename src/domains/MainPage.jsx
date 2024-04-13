import React from 'react';
import Header from './Header'; 
import Card from './Card'; 
import { MainPageProps } from '../shared/values/MainPageProps';


const MainPage: React.FC<MainPageProps> = ({ user, items }) => {

    return (
        <div className="card-page">
            <Header user={user} />
            <div className="cardsContainer">
                {items.map((item, index) => (
                    <div key={index}>
                        <Card items={item} swipable={true} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;


export default MainPage;
