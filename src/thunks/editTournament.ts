import { apiRoutes } from '../constants/api';
import { editTournament } from '../actions/tournaments';
import { Dispatch } from './types';

export const editTournamentThunk = (id: string, name: string) => async (
  dispatch: Dispatch
) => {
  const settings = {
    method: 'PATCH',
    body: JSON.stringify({
      name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(apiRoutes.editTournament(id), settings);

    if (response.ok === false) throw new Error('Error');

    dispatch(editTournament({ id, name }));
  } catch (error) {
    console.error(error);
  }
};
