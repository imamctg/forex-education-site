import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllCourse from '../AllCourse/AllCourse';
import './Education.css'

const Education = (props) => {
    const [datas, setDatas] = useState([])


    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setDatas(data.training))
    }, [])

    return (
        <div className="row mt-3 mb-2 mx-auto container">
            {
                datas.map(data => <AllCourse
                    key={data.name}
                    data={data}></AllCourse>)
            }
        </div>

    );
};

export default Education;