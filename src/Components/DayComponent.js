import React from 'react';
import './ComponentStyle.css';


const DayComponent = (props) => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const NavigateTo = (day) => {
        if (props.NavigateTo) {
            props.NavigateTo(day)
        }
    }
    return (
        <div className='dayContainer'>
            {props.response &&
                <button className='day-btn' onClick={NavigateTo.bind(this, props.response)}>
                    { // <button className='day' onClick={NavigateTo.bind(this, props.response)}>
                        //     <div>
                        //         {props.response && weekDays[new Date(props.response.dt_txt).getDay()]}
                        //     </div>
                        //     <img className='img' src={'http://openweathermap.org/img/wn/' + props.response.weather[0].icon + '@2x.png'} alt="weatherImage" />
                        //     <div>
                        //         {Math.floor(props.response.main['temp_min'])}
                        //         <span> &deg;C</span> {Math.floor(props.response.main['temp_max'])}
                        //         <span> &deg;C</span>
                        //     </div>
                        // </button>
                    }
                    <div className='day-details'>
                        <div className='day-info'>
                            <div>
                                {props.response && weekDays[new Date(props.response.dt_txt).getDay()]}
                            </div>
                            <div>
                                {props.response && props.response.date}
                            </div>
                        </div>
                        <div className='weather-icon'>
                            <img className='img' src={'http://openweathermap.org/img/wn/' + props.response.weather[0].icon + '@2x.png'} alt="weatherImage" />
                        </div>
                        <div className='desc'>
                            {props.response.weather[0].description}
                        </div>
                        <div className='weather'>
                            <div>
                                {Math.floor(props.response.main['temp_min'])}
                                <span> &deg;C</span> {Math.floor(props.response.main['temp_max'])}
                                <span> &deg;C</span>
                            </div>

                        </div>
                        <div className='humidity'>
                            {props.response.main.humidity + '%'}
                        </div>
                    </div>
                </button>
            }
        </div>

    )
}

export default DayComponent;