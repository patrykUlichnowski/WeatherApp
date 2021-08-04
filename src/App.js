import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'
import './components/styles/App.scss';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div >
      // <div>
      //   <h1>${whatToShow.name}</h1>
      //   <p>Max temperature: ${whatToShow.main.temp_max}<sup>o</sup>C</p>
      // </div>
    )
  }
}


export default App;
