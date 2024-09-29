import { useQuery } from '@tanstack/react-query';
import { button } from './button.style';
import { getSports } from '@/utils/getSports';
import { FC, useState } from 'react';

type SportLeague = {
  idLeague: string;
  strLeague: string;
  strLeagueAternate: string;
  strSport: string;
};

type ButtonProps = {
  sportsLeagues: SportLeague[];
  setSportsLeagues: Dispatch<SetStateAction<SportLeague[]>>;
};

const Button: FC<ButtonProps> = ({ sportsLeagues, setSportsLeagues }) => {
  const { data } = useQuery({
    queryKey: ['sports'],
    queryFn: getSports,
  });

  const handleClick = () => {

    console.log(typeof sportsLeagues);
    if (sportsLeagues.length !== 0) {
      setSportsLeagues([]);
    } else {
      setSportsLeagues(data.leagues);
    }
  };

  return (
    <>
      <button onClick={handleClick} css={button}>
        Get Sports
      </button>
    </>
  );
};

export default Button;
