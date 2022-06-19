import {useState} from 'react' 


function App() {
  const[city, setCity] = useState("")
  const[weatherForecast, setWeatherForecast ] = useState(null)

  const handleChange = (e) =>{
     setCity(e.target.value)
  }

  const handleSearch = () =>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=2beba8bc9057401ea3e231633221806&q=${city}&lang=pt`)
    .then((response)=>{
      if(response.status== 200){
        return response.json();
      }
    })
    .then((data)=>{
      setWeatherForecast(data);
  
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark md-4">
       <a className="navbar-brand text-white">
         Bruce Previsão do Tempo!!
       </a>
      </nav><br></br>
       
      <main className="container">
        <div className="jumbotron">
        <h1>{city}🌎🧭</h1><br></br>
          <h1>
           Verifique agora a previsão do tempo da sua cidade!
          </h1>
          <p className="lead">
            Digite o nome da sua cidade no campo abaixo e em seguida clique em pesquisar
          </p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input 
              onChange={handleChange}
              className="form-control" 
              value={city}/>
            </div>
          </div>

          <button onClick={handleSearch} className="btn btn-primary btn-lg">
            Pesquisar
          </button>

          { weatherForecast ? (
            <div>
              <div className="mt-4 d-flex aling-itens-center">
                <div>
                  <img src={weatherForecast.current.condition.icon}/>
                </div>

                <div>
                  <h3>Hoje {city}🗺 está com: {weatherForecast.current.condition.text}</h3>
                  <p className="lead">
                   Temperatura: {weatherForecast.current.temp_c}°C<br></br>
                   humidade do Ar: {weatherForecast.current.humidity}% <br></br>
                   Ultima atualização: {weatherForecast.current.last_updated} <br></br>
                   Temperatura fahrenheit: {weatherForecast.current.temp_c}°F<br></br>
                   Sensação Térmica: {weatherForecast.current.feelslike_f}<br></br>
                   Região: {weatherForecast.location.region}<br></br>
                   País: {weatherForecast.location.country}<br></br>
                   Latitude: {weatherForecast.location.lat}<br></br>
                   Longitude:  {weatherForecast.location.lon}
                  </p>
                  
                 
                </div>
               
                
                
              </div> 
            </div>
          ):null }
           
        </div>

      </main>
     
    </div>
  );
}

export default App;
