import { ITournament } from '../types/tournament';

export const FETCH_TOURNAMENT_LIST_REQUESTED =
  'FETCH_TOURNAMENT_LIST_REQUESTED';
export const FETCH_TOURNAMENT_LIST_SUCCESS = 'FETCH_TOURNAMENT_LIST_SUCCESS';
export const FETCH_TOURNAMENT_LIST_ERROR = 'FETCH_TOURNAMENT_LIST_ERROR';
export const SEARCH_TOURNAMENT = 'SEARCH_TOURNAMENT';
export const DELETE_TOURNAMENT = 'DELETE_TOURNAMENT';
export const EDIT_TOURNAMENT = 'EDIT_TOURNAMENT';
export const CREATE_TOURNAMENT = 'CREATE_TOURNAMENT';

export const fetchTournamentListRequested = () => ({
  type: FETCH_TOURNAMENT_LIST_REQUESTED
});

export const fetchTournamentListSuccess = (payload: ITournament) => ({
  type: FETCH_TOURNAMENT_LIST_SUCCESS,
  payload
});

export const fetchTournamentListError = (payload: string) => ({
  type: FETCH_TOURNAMENT_LIST_ERROR,
  payload
});

export const searchTournament = (payload: string) => ({
  type: SEARCH_TOURNAMENT,
  payload
});

export const deleteTournament = (payload: string) => ({
  type: DELETE_TOURNAMENT,
  payload
});

export const editTournament = (payload: { id: string; name: string }) => ({
  type: EDIT_TOURNAMENT,
  payload
});

export const createTournament = (payload: ITournament) => ({
  type: CREATE_TOURNAMENT,
  payload
});
