import React, { useEffect, useState } from 'react';
import DayComponent from '../Components/DayComponent';
import api from '../api/index';
import '../Components/ComponentStyle.css'

const Home = () => {
    const [mockData, SetMockData] = useState(null)
    useEffect(() => {
        api.get().then(function (response) {
            SetMockData(response.data.list)
        }).catch(function (error) {
            console.log(error);
        })
        // eslint-disable-next-line
    }, [])
    return (<div className='WeatherContainer'>
        {mockData && mockData.map((item, i) => {
            if (i % 8 === 0) {
                return (
                    <DayComponent key={i} imgSrc="http://openweathermap.org/img/wn/10d@2x.png" response={item} />
                )
            } else {
                return false
            }
        })}
    </div>
    )

}

export default Home;