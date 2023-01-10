import React from 'react';
import style from './Table.module.scss';

type Item = {
  activities: string;
  productionTime: string;
  warranties: string;
  paymentTerms: string;
  cost: string;
};

type TableProps = {
  data: Item[];
};

export const Table = ({ data }: TableProps) => {
  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead>
          <tr>
            <th scope="col">Параметры и требования</th>
            {new Array(data.length).fill(0).map((_, index) => (
              <th scope="col" key={index}>
                Участник №{index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              Наличие комплекса мероприятий, повышающих стандарты качества изготовления
            </th>
            {data.map((item, index) => (
              <td key={index}>{item.activities}</td>
            ))}
          </tr>
          <tr>
            <th scope="row">Срок изготовления лота, дней</th>
            {data.map((item, index) => (
              <td key={index}>{item.productionTime}</td>
            ))}
          </tr>
          <tr>
            <th scope="row">Гарантийные обязательства, мес</th>
            {data.map((item, index) => (
              <td key={index}>{item.warranties}</td>
            ))}
          </tr>
          <tr>
            <th scope="row">Условия оплаты, %</th>
            {data.map((item, index) => (
              <td key={index}>{item.paymentTerms}%</td>
            ))}
          </tr>
          <tr>
            <th scope="row">Стоимость изготовления лота, руб. (без НДС)</th>
            {data.map((item, index) => (
              <td key={index}>
                {(+item.cost).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
