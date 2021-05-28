import React, { useState } from 'react'

export default function Search() {

    const [search,setSearch] = useState('');
    const url = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=';

    const handleSubmit = (e) => {
        e.preventDefault();
         

        fetch(url + search)
            .then(res => res.json())
            .then(data => console.log(data))
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
        </div>
    )
}
