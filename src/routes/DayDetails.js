import React, { useEffect, useState } from 'react';
import Graph from '../Components/Graph';
import '../Components/ComponentStyle.css';

// to be substituted with live data;
// const rawData = {
//   cod: "200",
//   message: 0.0179,
//   cnt: 96,
//   list: [
//     {
//       dt: 1568984400,
//       main: {
//         temp: 5,
//       },
//       dt_txt: "2019-09-20 13:00:00"
//     },
//     {
//       dt: 1668984400,
//       main: {
//         temp: 10,
//       },
//       dt_txt: "2019-09-20 14:00:00"
//     },
//     {
//       dt: 1768984400,
//       main: {
//         temp: 15,
//       },
//       dt_txt: "2019-09-20 13:00:00"
//     }
//   ],
// };
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const DayDetails = (props) => {
  const [Data, SetData] = useState([]);
  const [day, setDay] = useState(null)
  useEffect(() => {
    SetData(props.location.state.Data);
    setDay(props.location.state.Day)
    // eslint-disable-next-line
  }, [])
  return (
    <div className='details'>
      {Data && <Graph rawData={Data} />}
      {day &&
        <div className='details-card'>
          <div className='card-details'>
            <div className='day-info'>
              <div>
                {day && weekDays[new Date(day.dt_txt).getDay()]}
              </div>
              <div>
                {day && day.date}
              </div>
            </div>
            <div className='day-details'>
              <div>
                <img className='img' src={'http://openweathermap.org/img/wn/' + day.weather[0].icon + '@2x.png'} alt="weatherImage" />

              </div>
              <div className='degree'>
                {Math.floor(day.main['temp_min'])}
                <span> &deg;C</span>
              </div>
            </div>
            <div className='weather-desc'>
              {day.weather[0].description}
            </div>
          </div>
          <div className='card-details card-data'>
            <div>
              Humidity:  {day.main.humidity + '%'}
            </div>
            <div>
              Wind Speed: {day.wind.speed} Degree: {day.wind.deg}
            </div>
            <div>
              See Level: {day.main.sea_level}
            </div>
            <div>
              Pressure: {day.main.pressure}
            </div>
          </div>
        </div>
      }
    </div>
    // <Graph rawData={rawData} />
  )
}

export default DayDetails;