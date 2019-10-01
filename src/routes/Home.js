import React, { useEffect, useState } from 'react';
import DayComponent from '../Components/DayComponent';
import api from '../api/index';
import '../Components/ComponentStyle.css'
import Graph from '../Components/Graph'

const Home = () => {
    const [Data, SetData] = useState([]);
    const [allData, setAllData] = useState([]);
    useEffect(() => {
        api.get().then(function (response) {
            setAllData(response.data.list);
            for (var i = 0; i < response.data.list.length; i += 8) {
                // eslint-disable-next-line
                SetData(Data => [...Data, response.data.list[i]])
            }
        }).catch(function (error) {
            console.log(error);
        })
        // eslint-disable-next-line
    }, [])
    return (<div className='WeatherContainer'>

        {Data && <Graph rawData={Data} />}
        <div className='Dayscontainer'>
            {Data && Data.map((item, i) => {
                return (
                    <DayComponent key={i} imgSrc="http://openweathermap.org/img/wn/10d@2x.png" allData={allData} response={item} />
                )

            })}
        </div>
    </div>
    )

}

export default Home;