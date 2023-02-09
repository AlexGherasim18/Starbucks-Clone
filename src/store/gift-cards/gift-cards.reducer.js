export const GIFTCARDS_ACTION_TYPES = {
  FETCH_GIFTCARDS_START: 'giftcards/FETCH_GIFTCARDS.START',
  FETCH_GIFTCARDS_SUCCESS: 'giftcards/FETCH_GIFTCARDS.SUCCESS',
  FETCH_GIFTCARDS_FAILED: 'giftcards/FETCH_GIFTCARDS.FAILED'
};

export const GIFTCARDS_INITIAL_STATE = {
  giftcards: [],
  isLoading: false,
  error: null
};

export const giftCardsReducer = (state = GIFTCARDS_INITIAL_STATE, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case(GIFTCARDS_ACTION_TYPES.FETCH_GIFTCARDS_START):
      return {...state, isLoading:true};
    case(GIFTCARDS_ACTION_TYPES.FETCH_GIFTCARDS_SUCCESS):
      return {...state, isLoading: false, giftcards:payload};
    case(GIFTCARDS_ACTION_TYPES.FETCH_GIFTCARDS_FAILED):
      return {...state, isLoading: false, error: payload};
    default:
      return state; 
  }
}