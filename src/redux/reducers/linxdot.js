import * as types from "../types/linxdot"

const initState = {
  loading: false,
  error: null,
  data: null
}

const linxdotUpdateInfo = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GET_LINXDOT_UPDATE_INFO_SUBMITTING:
    case types.GET_LINXDOT_UPDATE_INFO_SUCCESS:
    case types.GET_LINXDOT_UPDATE_INFO_FAILURE:
      return { ...state, ...payload }
    default:
      return state
  }
}

export default linxdotUpdateInfo