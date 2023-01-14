import { getPadTime } from 'helpers/getPadTime';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React, { useEffect } from 'react';
import { updateTime, updateTurn } from 'redux/reducers/auctionSlice';
import style from './Timer.module.scss';

export const Timer = () => {
  const { counter } = useAppSelector((state) => state.auction);
  const dispatch = useAppDispatch();

  const hours = getPadTime(Math.floor(counter / 3600));
  const minutes = getPadTime(Math.floor((counter / 60) % 60));
  const seconds = getPadTime(Math.floor(counter % 60));

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateTime());
      if (counter === 0) {
        dispatch(updateTurn());
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  return (
    <div className={style.timer}>
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Timer;
