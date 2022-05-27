import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getTournamentDataError } from '../../selectors';
import { ITournament } from '../../types/tournament';
import Tournament from './Tournament';
import { StyledList, StyledMessageDiv } from './List.styled';
import strings from '../../constants/strings';

interface IProps {
  data: ITournament[];
}

const List: FC<IProps> = ({ data }) => {
  const error = useSelector(getTournamentDataError);

  if (error) {
    return null;
  }

  return (
    <>
      {data && data.length > 0 ? (
        <StyledList>
          {data.map(item => (
            <Tournament key={item.id} tournamentData={item} />
          ))}
        </StyledList>
      ) : (
        <StyledMessageDiv>
          <p>{strings.noTournamentFound}</p>
        </StyledMessageDiv>
      )}
    </>
  );
};

export default List;
