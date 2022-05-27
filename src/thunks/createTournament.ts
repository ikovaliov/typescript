import { apiRoutes } from '../constants/api';
import { createTournament } from '../actions/tournaments';
import { Dispatch } from './types';

export const createTournamentThunk = (name: string) => async (
  dispatch: Dispatch
) => {
  const settings = {
    method: 'POST',
    body: JSON.stringify({
      name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(apiRoutes.tournament(), settings);

    if (response.ok === false) throw new Error('Error');

    const data = await response.json();

    dispatch(createTournament(data));
  } catch (error) {
    console.error(error);
  }
};
