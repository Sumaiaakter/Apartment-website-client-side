import initializeFirebase from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import {
    sendEmailVerification,
    updateProfile,
    createUserWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";


initializeFirebase();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    //providers 

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // clear error
    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 5000);
    }, [error]);

    // google sign in
    const signInWithGoogle = (location, history) => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    // sign up with email password
    function singUp(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // setNameAndImage();
                // emailVerify();
                alert("user has been created");
            })
            .catch((err) => {
                setError(err.message);
            });
    }

    // LOGIN WITH EMAIL AND PASSWORD--------------->
    const signInWithEmail = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                // const destination = location?.state?.from || '/';
                // history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }
    // set name and profile image url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    }

    function emailVerify() {
        sendEmailVerification(auth.currentUser).then(() => {
            alert(`An Verification mail has been set to ${email}`);
        });
    }

    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            } else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, []);

    // sign out
    function logOut() {
        signOut(auth)
            .then((res) => {
                setUser({});
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // reset password
    function passwordReset(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("password reset email has been sent");
            })
            .catch((err) => {
                setError(err.message);
            });
    }


    // get name
    function getName(e) {
        setName(e?.target?.value);
    }

    // get Email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    // Get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }
    // Get photoUrl
    function getPhoto(e) {
        setPhoto(e?.target?.value);
    }


    return {
        signInWithEmail,
        logOut,
        signInWithGoogle,
        user,
        setUser,
        error,
        setError,
        getPassword,
        getEmail,
        singUp,
        getPhoto,
        getName,
        passwordReset,
        loading,

    };


};

export default useFirebase;