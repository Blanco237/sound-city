import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth'

import app from './firebase'

import AxiosInstance from '../api/api';

export const auth = getAuth(app);

//Google provider
const provider = new GoogleAuthProvider();

//window size


//Login Existing User
export const loginUser = async (data) => {
    let response = {};
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;
        await saveToDatabase(user);
        response.success = true;
    }
    catch (e) {
        console.log(e);
        response.success = false;
        response.ecode = e.code;
        response.emessage = e.message
    }
    return response;
}

// Register New User
export const registerUser = async (data) => {
    let response = {};
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;
        await saveToDatabase(user);
        response.success = true;
    }
    catch (e) {
        console.log(e);
        response.success = false;
        response.ecode = e.code;
        response.emessage = e.message
    }
    return response;
}

//Google Login
export const loginWithGoogle = async (size) => {
    let response = {};
    let user;
    try {
        //Desktop Screen, Sign in with Popup
        const userCredential = await signInWithPopup(auth, provider);
        user = userCredential.user;
        response.success = true;
        await saveToDatabase(user);
    }
    catch (e) {
        response.success = false;
        response.ecode = e.code;
        response.emessage = e.message;
    }
    return response;
}


//Sign out user
export const logout = async () => {
    await signOut(auth);
}

//Save to Database
const saveToDatabase = async (user) => {
    const res = await AxiosInstance.post('/users/single', user);
    if (res.data.error) {
        await AxiosInstance.post('/users/create', user);
    }
}