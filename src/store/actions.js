
import * as types from './mutation-types'
export default {

  setMoments({ commit }, moment) {
    commit(types.SET_MOMENTS, moment)
  },
  setNewExploreSign({ commit }, value) {
    commit(types.SET_NEWEXPLORESIGN, value)
  },
  setLike({ commit }, obj) {
    commit(types.SET_LIKE, obj)
  },
	offlike({ commit }, obj) {
    commit(types.OFF_LIKE, obj)
  },
 	setwechat({ commit }, obj) {
    commit(types.SET_WECHAT, obj)
  },
  delBasemsg({ commit }, dex) {
    commit(types.DEL_BASEMSG, dex)
  },
}
