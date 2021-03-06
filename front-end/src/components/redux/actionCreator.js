import {
  USERS_DATA_FAILURE,
  USERS_DATA_SUCCESS,
  USERS_DATA_REQ,
} from "./actionType";

import axios from "axios";

export const usersDataReq = () => ({
  type: USERS_DATA_REQ,
});

export const usersDataSuccess = (payload) => ({
  type: USERS_DATA_SUCCESS,
  payload,
});

export const usersDataFailure = (payload) => ({
  type: USERS_DATA_FAILURE,
  payload,
});

export const getusersData = (payload) => (dispatch) => {
  dispatch(usersDataReq);

  var url =
    "http://localhost:5000/admin/usersDetails?page=" + payload + "&limit=6";
  axios({
    method: "GET",
    url: url,
  })
    .then((res) => dispatch(usersDataSuccess(res.data)))
    .catch((err) => dispatch(usersDataFailure(err)));
};
