import FetchData from './FetchData'
import React from 'react';
import ReactDOM from 'react-dom';
import CityCard from './CityCard';
import './styles/Loading.scss'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      cityName: '',
      loading: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleApi = this.handleApi.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleApi() {
    // ReactDOM.unmountComponentAtNode(CityCard)
    this.setState({ loading: true })
    let newData = new FetchData();
    setTimeout(() => {
      newData.getAPIdata(this.state.cityName).then((data) => {
        ReactDOM.render(<CityCard data={data} />, document.getElementById('cityCard-holder'))
      })
      this.setState({ loading: false })
    }, 1000);
  }

  render() {
    return (
      <main>
        <div className='datainput'>
          <input
            type="text"
            name='cityName'
            placeholder="Which city do you want?"
            value={this.state.cityName}
            onChange={this.handleChange}
          />
          <button onClick={this.handleApi}>Show me weather!</button>
        </div>
        <div id='cityCard-holder' className='cityCard-holder'>
          {this.state.loading ?
            <div className='loading-wrap'>
              <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            : null}
        </div>
      </main>
    )
  }
}

export default Main;