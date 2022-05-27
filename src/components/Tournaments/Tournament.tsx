import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTournamentThunk } from '../../thunks/deleteTournament';
import { editTournamentThunk } from '../../thunks/editTournament';
import { ITournament } from '../../types/tournament';
import { H6, Button } from '../ui';
import { StyledTournamentDiv, StyledTournamentButtons } from './List.styled';
import strings from '../../constants/strings';

interface IProps {
  tournamentData: ITournament;
}

const Tournament: FC<IProps> = ({ tournamentData }) => {
  const dispatch = useDispatch();

  const {
    id,
    name,
    organizer,
    game,
    participants: { current, max },
    startDate
  } = tournamentData;

  const handleEdit = (id: string) => {
    let name = window.prompt(`${strings.newTournamentName}:`);

    if (name) {
      dispatch(editTournamentThunk(id, name));
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm(strings.deleteTournament)) {
      dispatch(deleteTournamentThunk(id));
    }
  };

  const date = new Date(startDate);

  return (
    <StyledTournamentDiv>
      <H6>{name}</H6>
      <p>{`${strings.organizer}: ${organizer}`}</p>
      <p>{`${strings.game}: ${game}`}</p>
      <p>{`${strings.participants}: ${current}/${max}`}</p>
      <p>{`${strings.start}: ${date.toLocaleString()}`}</p>

      <StyledTournamentButtons>
        <Button onClick={() => handleEdit(id)}>{strings.edit}</Button>
        <Button onClick={() => handleDelete(id)}>{strings.delete}</Button>
      </StyledTournamentButtons>
    </StyledTournamentDiv>
  );
};

export default Tournament;
