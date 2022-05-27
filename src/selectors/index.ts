import { TRootState } from '../reducers';
import { ITournament } from '../types/tournament';

// Tournaments
export const getSearchValue = (state: TRootState): string =>
  state.tournaments['search'];
export const getTournamentData = (state: TRootState): ITournament[] =>
  state.tournaments['data'];
export const getIsTournamentDataLoading = (state: TRootState): boolean =>
  state.tournaments['isLoading'];
export const getTournamentDataError = (state: TRootState): string =>
  state.tournaments['error'];
