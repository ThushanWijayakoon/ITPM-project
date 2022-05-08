
import * as api from './index'


export const deleteUser = (userID) => async() => {
    try {
        const res = await api.deleteUser(userID);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const getUsers = () => async (dispatch) =>{
   
}
export const getUser = (userID) => async() => {
    try {
        const { data } = await api.fetchUser(userID);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const updateUser = (user) => async(dispatch) => {
    try {
        const res = await api.updateUser(user);
        dispatch(getUsers())
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const updatePassword = (user) => async() => {
    try {
        const res = await api.updatePassword(user);
        return res;
    } catch (error) {
        return {...error.response};
    }
}

export const updateProfile = (user) => async() => {
    try {
        const res = await api.updateProfile(user);
        return res;
    } catch (error) {
        return {...error.response};
    }
}