import React from 'react';
import './App.scss';
import Table from './components/Table/Table';
import { USERS_DATA } from './constants/data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header-title">
          Ход торгов <b>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</b>
        </h1>
      </header>
      <main>
        <h2 className="main-title">
          Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в
          таблице:
        </h2>
        <Table data={USERS_DATA} />
      </main>
    </div>
  );
}

export default App;
