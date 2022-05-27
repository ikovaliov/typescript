import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTournamentData } from '../../thunks/fetchTournaments';
import {
  getTournamentData,
  getIsTournamentDataLoading,
  getTournamentDataError
} from '../../selectors';
import ListTools from './ListTools';
import List from './List';
import { Button } from '../ui';
import { StyledMessageDiv } from './List.styled';
import strings from '../../constants/strings';

const Tournaments = () => {
  const dispatch = useDispatch();
  const tournamentData = useSelector(getTournamentData);
  const isLoading = useSelector(getIsTournamentDataLoading);
  const error = useSelector(getTournamentDataError);

  const handleClick = () => {
    dispatch(fetchTournamentData());
  };

  useEffect(() => {
    if (!tournamentData) {
      dispatch(fetchTournamentData());
    }
  }, [dispatch, tournamentData]);

  return (
    <>
      <ListTools />

      {isLoading ? (
        <StyledMessageDiv>
          <p>{strings.loadingTournaments}</p>
        </StyledMessageDiv>
      ) : (
        <List data={tournamentData} />
      )}

      {error && (
        <StyledMessageDiv>
          <p>{error}</p>
          <Button onClick={handleClick}>{strings.retry}</Button>
        </StyledMessageDiv>
      )}
    </>
  );
};

export default Tournaments;
