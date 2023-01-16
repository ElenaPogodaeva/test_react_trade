import React from 'react';
import style from './UserPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

export const UserPage = () => {
  const { users } = useAppSelector((state) => state.auction);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Текущие торги</h2>
      <div className={style.users}>
        <h3 className={style.subtitle}>Участники торгов</h3>
        <ul>
          {users.map((item, index) => (
            <li key={item.id}>
              <label>
                Участник {index + 1}
                <input name="user" type="checkbox" checked={item.isOnline} />
              </label>
            </li>
          ))}
        </ul>
        <button className="btn btnBlue" onClick={handleClick}>
          Ход торгов
        </button>
      </div>
    </div>
  );
};

export default UserPage;
