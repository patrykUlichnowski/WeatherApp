import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import './styles/CityCard.scss'

class CityCard extends React.Component {
  render() {
    try {
      return (
        <div className='cityCard'>
          <div className='data'>
            <div className='city-header'>
              <h1>
                {this.props.data.name}
              </h1>
              <img
                src={`https://www.countryflags.io/${this.props.data.sys.country}/flat/64.png`}
                alt='flag'
                className='flag'
              />
            </div>
            <div className='weather'>
              <h4>
                Weather: {this.props.data.weather[0].description}
              </h4>
              <img
                src={`http://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`}
                alt='weathericon'
              />
            </div>
            <h3>
              🌡Temperature {parseInt(this.props.data.main.temp)}<sup>o</sup>C
            </h3>
            <p>
              Pressure {this.props.data.main.pressure}hPa
            </p>
            <p>
              Humidity {this.props.data.main.humidity}%
            </p>
            <p>
              Wind speed {((this.props.data.wind.speed) * 3.6).toFixed(1)} km/h
            </p>
          </div>
          <div className='map'>
            <Map
              key={new Date().getTime()}
              google={this.props.google}
              zoom={8}
              initialCenter={{
                lat: parseFloat(this.props.data.coord.lat.toFixed(3)),
                lng: parseFloat(this.props.data.coord.lon.toFixed(3))
              }}>
              <Marker
                position={{
                  lat: parseFloat(this.props.data.coord.lat.toFixed(3)),
                  lng: parseFloat(this.props.data.coord.lon.toFixed(3))
                }}
              />
            </Map>
          </div>
        </div>
      )
    } catch (error) {
      console.log(error);
      return (
        <div className='error'>
          <h1>You have to choose a city</h1>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Exclamation_mark_2.svg/1200px-Exclamation_mark_2.svg.png'
            alt='!'
          />
        </div>
      )
    }
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBDdMEPipzgSeAc4Bd1DGzeCG0YOLPuf7o'
})(CityCard);
