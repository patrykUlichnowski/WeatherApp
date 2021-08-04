class FetchData {
  async getAPIdata(cityName) {
    const apiKEY = '52d5234400c7bf82d698e16b5603825f';
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKEY}&units=metric`
    );
    const apiData = await response.json();
    console.log(apiData);
    return apiData;
  }
}

export default FetchData;