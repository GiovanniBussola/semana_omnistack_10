import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';
import api from './services/api';


function App() {
  const [latitude, setLatitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('')
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(latitude);
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li class="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50522400?v=4" alt="Giovanni Bussola" />
              <div className="user-info">
                <strong>Giovanni Bússola</strong>
                <span>PHP, JS</span>
              </div>
            </header>
            <p>
              Lorem ipsum behamat teste php de lorim
            </p>
            <a href="https://github.com/giovannibussola">Acessar perfil</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50522400?v=4" alt="Giovanni Bussola" />
              <div className="user-info">
                <strong>Giovanni Bússola</strong>
                <span>PHP, JS</span>
              </div>
            </header>
            <p>
              Lorem ipsum behamat teste php de lorim
            </p>
            <a href="https://github.com/giovannibussola">Acessar perfil</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50522400?v=4" alt="Giovanni Bussola" />
              <div className="user-info">
                <strong>Giovanni Bússola</strong>
                <span>PHP, JS</span>
              </div>
            </header>
            <p>
              Lorem ipsum behamat teste php de lorim
            </p>
            <a href="https://github.com/giovannibussola">Acessar perfil</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50522400?v=4" alt="Giovanni Bussola" />
              <div className="user-info">
                <strong>Giovanni Bússola</strong>
                <span>PHP, JS</span>
              </div>
            </header>
            <p>
              Lorem ipsum behamat teste php de lorim
            </p>
            <a href="https://github.com/giovannibussola">Acessar perfil</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50522400?v=4" alt="Giovanni Bussola" />
              <div className="user-info">
                <strong>Giovanni Bússola</strong>
                <span>PHP, JS</span>
              </div>
            </header>
            <p>
              Lorem ipsum behamat teste php de lorim
            </p>
            <a href="https://github.com/giovannibussola">Acessar perfil</a>
          </li>
          <li class="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50522400?v=4" alt="Giovanni Bussola" />
              <div className="user-info">
                <strong>Giovanni Bússola</strong>
                <span>PHP, JS</span>
              </div>
            </header>
            <p>
              Lorem ipsum behamat teste php de lorim
            </p>
            <a href="https://github.com/giovannibussola">Acessar perfil</a>
          </li>
        </ul>
      </main>

    </div >
  );
}

export default App;
