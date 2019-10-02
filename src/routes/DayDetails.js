import React, { useEffect, useState } from 'react';
import Graph from '../Components/Graph';
import DayComponent from '../Components/DayComponent'

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

const DayDetails = (props) => {
  const [Data, SetData] = useState([]);
  const [day, setDay] = useState(null)
  useEffect(() => {
    SetData(props.location.state.Data);
    setDay(props.location.state.Day)
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      {Data && <Graph rawData={Data} />}
      {day && <DayComponent key={day.dt} response={day} />}
    </div>
    // <Graph rawData={rawData} />
  )
}

export default DayDetails;