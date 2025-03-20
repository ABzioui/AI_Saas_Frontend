import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://backend:3000/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="App">
            <h1>Liste des Utilisateurs</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;