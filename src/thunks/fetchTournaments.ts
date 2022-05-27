import { apiRoutes } from '../constants/api';
import {
  fetchTournamentListRequested,
  fetchTournamentListSuccess,
  fetchTournamentListError
} from '../actions/tournaments';
import { Dispatch } from './types';
import strings from '../constants/strings';

export const fetchTournamentData = () => async (
  dispatch: Dispatch,
  getState: Function
) => {
  dispatch(fetchTournamentListRequested());

  const { search } = getState().tournaments;

  const settings = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(apiRoutes.tournamentList(search), settings);
    if (response.ok === false) throw new Error('Error');

    const data = await response.json();

    dispatch(fetchTournamentListSuccess(data));
  } catch {
    dispatch(fetchTournamentListError(strings.somethingWentWrong));
  }
};
