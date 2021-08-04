import React from 'react';
import './styles/CityCard.scss'

class CityCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.name}</h1>
        <h5>{parseInt(this.props.data.main.temp_max)}<sup>o</sup>C</h5>
      </div>
    )
  }
}

export default CityCard;