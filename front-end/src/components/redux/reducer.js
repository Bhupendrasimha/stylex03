import {
  USERS_DATA_FAILURE,
  USERS_DATA_SUCCESS,
  USERS_DATA_REQ,
} from "./actionType";

const initState = {
  usersRecords: [],
  usersNext: [],
  usersPrev: [],
  usersLength: [],
  isLoading: false,
  isSuccess: false,
  pagiantion:false
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USERS_DATA_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case USERS_DATA_FAILURE:
      return {
        ...state,
      };
    case USERS_DATA_SUCCESS:
      return {
        ...state,
        usersRecords: [...payload.current],
        usersNext: payload.next,
        usersPrev: payload.prev,
        usersLength: payload.length,
        isLoading: false,
        isSuccess: true,
        pagination:true
      };

    default:
      return state;
  }
};
export default reducer;
