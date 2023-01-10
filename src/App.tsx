import React from 'react';
import './App.scss';
import Table from './components/Table/Table';

const data = [
  {
    activities: 'нет',
    productionTime: '80',
    warranties: '24',
    paymentTerms: '30',
    cost: '3700000',
  },
  {
    activities: 'нет',
    productionTime: '90',
    warranties: '24',
    paymentTerms: '100',
    cost: '3200000',
  },
  {
    activities: 'нет',
    productionTime: '75',
    warranties: '22',
    paymentTerms: '60',
    cost: '2800000',
  },
  {
    activities: 'нет',
    productionTime: '120',
    warranties: '36',
    paymentTerms: '50',
    cost: '2500000',
  },
  {
    activities: 'да',
    productionTime: '110',
    warranties: '30',
    paymentTerms: '70',
    cost: '2900000',
  },
];

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
        <Table data={data} />
      </main>
    </div>
  );
}

export default App;
