import request from '../utils/request'
import api from '../utils/api'
export default {

    namespace: 'UserActive',

    state: {
        status: 1,
        formData: {
            Uid: 1,
            Pwd: ''
        }
    },
    reducers: {
        setStatus(state, action) {
            return { ...state, status: action.data };
        },
    },
    effects: {
        *login({ payload: state }, { call, put }) {
            yield call(request(api.login, {
                method: 'POST',
                body: state.formData
            }))
            yield put({ type: 'save' });
        },
    },
    subscriptions: {

    },
};
