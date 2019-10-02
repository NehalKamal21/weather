import React, { useEffect, useState } from 'react';
import Graph from '../Components/Graph';


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
  console.log(props.location.state.Data)
  const [Data, SetData] = useState([]);
  useEffect(() => {
    SetData(props.location.state.Data);
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      {Data && <Graph rawData={Data} />}

    </div>
    // <Graph rawData={rawData} />
  )
}

export default DayDetails;