import React from 'react';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import ExtraSection from '../components/ExtraSection/ExtraSection';
import ExtraSection2 from '../components/ExtraSection/ExtraSection2';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Categories></Categories>
           <ExtraSection></ExtraSection>
           <ExtraSection2></ExtraSection2>
        </div>
    );
};

export default Home;