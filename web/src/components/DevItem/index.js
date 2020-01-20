import React from 'react';
import './styles.css';

function DevItem({ dev, onDelete }) {

    async function deleteDev() {
        await onDelete(dev)
    }

    return (
        <li key={dev._id} className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>
                {dev.bio}
            </p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil</a>
            <button onClick={deleteDev}>Excluir</button>
            <button>Atualizar</button>
        </li>
    )
}

export default DevItem;

