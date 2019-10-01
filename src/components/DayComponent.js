import React from 'react';
import './ComponentStyle.css'
function DayComponent(props) {
    let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return (

        <div className='dayContainer'>
            {props.response &&
                <div className='day'>
                    <div>
                        {props.response && weekDays[new Date(props.response.dt_txt).getDay()]}
                    </div>
                    <img className='img' src={'http://openweathermap.org/img/wn/' + props.response.weather[0].icon + '@2x.png'} alt="weatherImage" />
                    <div>
                        {Math.floor(props.response.main['temp_min'])}
                        <span> &deg;C</span> {Math.floor(props.response.main['temp_max'])}
                        <span> &deg;C</span>
                    </div>
                </div>
            }

        </div>
    )
}

export default DayComponent;