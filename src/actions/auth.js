import { firebase, googleAuthProvider } from "../firebase/firabaseConfig"
import { types } from "../types/types"

export const startLoginEmail = (email, passsword) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'yisus'))
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})