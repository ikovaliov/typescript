import { apiRoutes } from '../constants/api';
import { deleteTournament } from '../actions/tournaments';
import { Dispatch } from './types';

export const deleteTournamentThunk = (id: string) => async (
  dispatch: Dispatch
) => {
  const settings = {
    method: 'DELETE'
  };

  try {
    const response = await fetch(apiRoutes.editTournament(id), settings);
    if (response.ok === false) throw new Error('Error');

    dispatch(deleteTournament(id));
  } catch (error) {
    console.error(error);
  }
};
