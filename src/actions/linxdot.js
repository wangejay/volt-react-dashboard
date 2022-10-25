import api from "../api"
import * as types from "../redux/types/linxdot"

export const getLinxdotUpdateInfo = () => async (dispatch) => {
  dispatch({
    type: types.GET_LINXDOT_UPDATE_INFO_SUBMITTING,
    payload: { loading: true }
  })
  try {
    const res = await api.get("app_updater/info.json")
    dispatch({
      type: types.GET_LINXDOT_UPDATE_INFO_SUCCESS,
      payload: { loading: false, data: res.data.result }
    })
    console.log(res)
  } catch (error) {
    dispatch({
      type: types.GET_LINXDOT_UPDATE_INFO_FAILURE,
      payload: { loading: false, error: error }
    })
  }
}