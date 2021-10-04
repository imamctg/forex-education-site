import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Home.css'
import HomeCourse from './HomeCourse';

/* This is Home component to build home page with 4 course details only */
const Home = () => {
    /* useState declaration for data stroge */
    const [datas, setDatas] = useState([])

    /* useEffect hook declaration for data loading from self created fakeData */
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setDatas(data.training))
    }, []);


    return (
        <div className="row mt-3 mb-3 mx-auto container">
            {
                datas.slice(0, 4).map(data => <HomeCourse data={data}></HomeCourse>)
            }
        </div>
    );
};

export default Home;