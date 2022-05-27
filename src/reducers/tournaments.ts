import * as actions from '../actions/tournaments';
import { ITournament } from '../types/tournament';

type TAction = {
  type: string;
  payload?: any;
  error: any;
};

interface ITournamentsState {
  search: string;
  data: ITournament[] | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: ITournamentsState = {
  search: '',
  data: null,
  error: null,
  isLoading: false
};

export default function(state = initialState, action: TAction) {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_TOURNAMENT_LIST_REQUESTED: {
      return {
        ...state,
        error: null,
        isLoading: true
      };
    }

    case actions.FETCH_TOURNAMENT_LIST_SUCCESS: {
      return {
        ...state,
        data: payload,
        error: null,
        isLoading: false
      };
    }

    case actions.FETCH_TOURNAMENT_LIST_ERROR: {
      return {
        ...state,
        error: payload,
        isLoading: false
      };
    }

    case actions.SEARCH_TOURNAMENT: {
      return {
        ...state,
        search: payload
      };
    }

    case actions.DELETE_TOURNAMENT: {
      return {
        ...state,
        data: state.data?.filter(item => item.id !== payload)
      };
    }

    case actions.EDIT_TOURNAMENT: {
      const { id, name } = payload;

      return {
        ...state,
        data: state.data?.map(item => {
          if (item.id !== id) {
            return item;
          }

          return {
            ...item,
            name
          };
        })
      };
    }

    case actions.CREATE_TOURNAMENT: {
      return {
        ...state,
        data: [payload].concat(state.data)
      };
    }

    default:
      return state;
  }
}
