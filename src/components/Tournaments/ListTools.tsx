import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTournamentData } from '../../thunks/fetchTournaments';
import { createTournamentThunk } from '../../thunks/createTournament';
import { searchTournament } from '../../actions/tournaments';
import { getSearchValue } from '../../selectors';
import { Input, Button } from '../ui';
import { StyledListActionDiv } from './List.styled';
import strings from '../../constants/strings';

const SEARCH_WORD_MIN_LENGTH = 4;

const ListTools = () => {
  const dispatch = useDispatch();
  const search = useSelector(getSearchValue);

  const [prevSearchState, setPrevSearchState] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    dispatch(searchTournament(value));
  };

  const handleClick = () => {
    let name = window.prompt(`${strings.tournamentName}:`);

    if (name) {
      dispatch(createTournamentThunk(name));
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const isStateChanged = prevSearchState !== search;

      if (
        isStateChanged &&
        (search === '' ||
          (search && search.trim().length >= SEARCH_WORD_MIN_LENGTH))
      ) {
        dispatch(fetchTournamentData());
        setPrevSearchState(search);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [dispatch, prevSearchState, search]);

  return (
    <StyledListActionDiv>
      <Input
        onChange={handleChange}
        value={search}
        placeholder={strings.searchTournament}
      />
      <Button onClick={handleClick}>{strings.createTournament}</Button>
    </StyledListActionDiv>
  );
};

export default ListTools;
