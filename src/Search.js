import React, { useState } from 'react'
import Modal from './Modal';



export default function Search() {

    const [search,setSearch] = useState('');
    const [infos,setInfos] = useState([]);
    const [locData,setlocData] = useState([]);

    const[isOpen,setIsOpen] = useState(false)


    const url = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=';
    //const {title,location_type,woeid,latt_long} = info;
    const handleSubmit = (e) => {
        e.preventDefault();
         
        
        fetch(url + search)
            .then(res => res.json())
            .then(data => setInfos(data))
        
        setSearch('');    
    }

    const handleClick = (id) =>{
        fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/' + id)
            .then(res => res.json())
            .then(data => setlocData(data))
      
        setIsOpen(true);
    }
    

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label>Search for Location</label>
                <input type="text" 
                    placeholder="Search" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}    />
            </form>
           <div className="city-container">
                {infos.map(info =>(
                    <div key={info.woeid} className="city" onClick={() => handleClick(info.woeid)}>
                        <div className="city-title">Name: {info.title}</div> 
                        <div>Type: {info.location_type}</div>
                        <div>Latitude and Longtitue: {info.latt_long}</div>
                    </div>

                    ))}
            </div>

            <div>
                <Modal open={isOpen} onClose={() =>setIsOpen(false)}>
                {locData.consolidated_weather.map(data =>(

                    <div key={data.id} className="consolidate">
                        <div><strong>Weather-state</strong>: {data.weather_state_name}</div>
                        <div><strong>Weathe-abbr</strong>: {data.weather_state_abbr}</div>
                        <div><strong>Wind-direction-compass</strong>: {data.wind_direction_compass}</div>
                        <div><strong>Data</strong>: {data.created}</div>
                        <div><strong>App-data</strong>: {data.applicable_date}</div>
                        <div><strong>Min-temp</strong>: {data.min_temp}</div>
                        <div><strong>Max-temp</strong>:{data.the_temp}</div>
                        <div><strong>The temp</strong>:{data.wind_speed}</div>
                        <div><strong>Wind Direction</strong>:{data.wind_direction}</div>
                        <div><strong>Air pressure</strong>:{data.airpressure}</div>
                        <div><strong>Humidity</strong>:{data.humidity}</div>
                        <div><strong>Visibility</strong>:{data.visibility}</div>
                        <div><strong>Predictability</strong>:{data.predictability}</div>
                        <br/>
                    </div>
                ))}
                        
                </Modal>
            </div>
        </div>
    )
}
