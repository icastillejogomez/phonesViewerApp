import { Phone } from "src/types";

export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };


export function typedAction(type: string, payload?: any) {
  return { type, payload };
}


type MobileState = {
  mobiles: Phone[] | undefined,
  offset: number,
  fetchMore: boolean,
  fetchingMore: boolean,
};

const initialState: MobileState = {
  mobiles: undefined,
  offset: 0,
  fetchMore: false,
  fetchingMore: false,
}

export const addMobiles = (mobiles: Phone[]) => {
  return typedAction('mobiles/ADD', mobiles);
};

export const setFetchingMore = (fetchingMore: boolean) => {
  return typedAction('mobiles/SET_FETCHING_MORE', fetchingMore);
};

type MobileAction = ReturnType<typeof addMobiles | typeof setFetchingMore>;

export function mobileReducer(state = initialState, action: MobileAction): MobileState {
  switch (action.type) {
    case 'mobiles/ADD':
      return {
        mobiles: state.mobiles ? state.mobiles.concat(action.payload) : action.payload,
        offset: state.mobiles ? state.mobiles.concat(action.payload).length : action.payload.length,
        fetchMore: action.payload.length !== 0,
        fetchingMore: state.fetchingMore,
      };
    case 'mobiles/SET_FETCHING_MORE':
      console.log('Updating fetching More state to ' + action.payload )
      return {
        ...state,
        fetchingMore: action.payload,
      }
    default:
      return state;
  }
}