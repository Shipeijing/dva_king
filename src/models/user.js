import request from '../utils/request'
import api from '../utils/api'
export default {

    namespace: 'UserActive',

    state: {
        status: 0,
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
        *login(action, { call, put }) {
            yield call(request(api.login, 'POST', action.data).then((res => {

            })
            ))
            yield put({ type: 'save' });
        },
    },
    subscriptions: {

    },
};
