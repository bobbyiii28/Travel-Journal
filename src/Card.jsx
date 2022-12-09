import React from 'react'
import data from './data'
import App  from './App'
import locationLogo from './assets/Fill 219.svg'


export default function Card (props) {
    return (
    <div className='container'>
            <div className = 'card-container'>
                <div className='image-container'>

                    <img src = {props.imageUrl}></img>

                </div>
                <div className='text-container'>
                    <div className = 'location-container'>

                        <img className='location-image' src = {locationLogo}></img>
                        <p className='location'>
                            {props.location}
                        </p>
                        <a href = {props.googleMapsUrl}>View on Google Maps</a>

                    </div>
                    <h1 className='title'>
                        {props.title}
                    </h1>
                    <p className='date'>
                        {props.startDate} - {props.endDate}
                    </p>
                    <p className = 'description'>
                        {props.description}
                    </p>

                </div>
            </div>

    </div>    
    )
}