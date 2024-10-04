import { FC } from 'react';
import { content, leagueName } from './content.style';

export type SportLeague = {
  idLeague: string;
  strLeague: string;
  strLeagueAternate: string;
  strSport: string;
};

type ContentProps = {
  sportsLeagues: SportLeague[];
};

const Content: FC<ContentProps> = ({ sportsLeagues }) => {
  return (
    <div>
      <h2>sports league list commit 2</h2>
      {sportsLeagues.map((sportsLeague) => {
        return (
          <div key={sportsLeague.idLeague} css={content}>
            <h2 css={leagueName}>{sportsLeague.strLeague}</h2>
            <span>{sportsLeague.strSport}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
