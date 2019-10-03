import React, { useEffect, useState } from 'react';
import API from '../api/index';
import '../Components/ComponentStyle.css';
import DayComponent from '../Components/DayComponent';
import _ from 'lodash';
const Home = (props) => {
    const [Data, SetData] = useState([]);
    const [groupedData, setGroupedData] = useState({});
    useEffect(() => {
        API('/forecast', 'q=Cairo&&units=metric').get().then(function (response) {
            response.data.list.map(item => {
                item.date = item.dt_txt.slice(0, 10);
                return item;
            })
            setGroupedData(Data => _.groupBy(response.data.list, 'date'))

            response.data.list.map((item, i) => {
                if (i % 8 === 0) {
                    SetData(Data => [...Data, item])
                }
                return item;
            })

        }).catch(function (error) {
            console.log(error);
        })
        // eslint-disable-next-line
    }, []);
    const NavigateTo = (day) => {
        const { history } = props;
        if (day.dt) {
            history.push({
                pathname: '/' + day.dt,
                state: { Day: day, Data: groupedData[day.date] }
            });
        }

    }
    return (<div className='WeatherContainer'>
        <div className='Dayscontainer'>
            {Data && Data.map((item, i) => {
                return (
                    <DayComponent key={i} response={item} NavigateTo={NavigateTo} />
                )
            })}
        </div>

    </div>
    )

}

export default Home;