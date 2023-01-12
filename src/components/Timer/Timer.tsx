import { TURN_TIME } from 'constants/constants';
import { getPadTime } from 'helpers/getPadTime';
import React, { useEffect, useState } from 'react';
import style from './Timer.module.scss';

type TimerProps = {
  setNextTurn: () => void;
};

export const Timer = ({ setNextTurn }: TimerProps) => {
  const [counter, setCounter] = useState(TURN_TIME);

  const hours = getPadTime(Math.floor(counter / 3600));
  const minutes = getPadTime(Math.floor((counter / 60) % 60));
  const seconds = getPadTime(Math.floor(counter % 60));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => (counter >= 1 ? counter - 1 : TURN_TIME));
      if (counter === 0) {
        setNextTurn();
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
