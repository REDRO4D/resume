import { firebase, db } from "../firebase.config";

export const loginWithEmail = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(async ({ user }) => {// Se esta destructurando user del objeto que viene de firebase
            // console.log(user);
            return true;
        })
        .catch(reject => {
            return false;
        })
}

export const signUpWithEmail = (fullName, email, password) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({ user }) => {// Se esta destructurando user del objeto que viene de firebase
            const setUserFirebase = await db.collection("users").doc(user.email);
            const preparedUser = {
                uid: user.uid,
                email: user.email,
                name: fullName,
                register: new Date().getTime()
            };
            await setUserFirebase.set(preparedUser);
        })
}

export const logout = async () => {
    await firebase.auth().signOut();
}