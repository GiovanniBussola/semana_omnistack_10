import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';


function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }

  async function handleRemoveDev(dev) {
    const response = await api.delete('/devs/' + dev.github_username)

    setDevs([...devs.filter(function (value, index) {
      if (value._id !== dev._id) {
        return value
      } 
    })]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm
          onSubmit={handleAddDev}
        />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem
              key={dev._id}
              dev={dev}
              onDelete={handleRemoveDev}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
