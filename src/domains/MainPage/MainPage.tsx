import React from 'react';
import Header from '../../shared/components/Header'; 
import Cards from '../../shared/components/Cards'; 
import MainPageProps from '../../shared/values/MainPageProps';


  const MainPage: React.FC<MainPageProps> = ({ user, items }) => {

    return (
        <div>
            <Header user={user} />

            <div className="cardsContainer">
                {items.map((item, index) => (
                    <div key={index}>
                        <Cards items={[item]} swipable={true} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
