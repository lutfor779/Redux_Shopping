import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // google signIn method implement
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');

                // save user data to database
                saveUser(result.user.email, result.user.displayName, 'PUT');

                // redirect url
                const from = location?.state?.from || '/';
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err);
            })
            .finally(setIsLoading(false));
    }


    // handle login system when re-use website
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError("");
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [auth]);


    // check admin after logIn
    useEffect(() => {
        fetch(`https://fierce-ocean-20596.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);

    // console.log('admin: ', admin);
    // handle singOut user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setError("");
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => setIsLoading(false))
    }


    // save user details when login successfully
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://fierce-ocean-20596.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }


    return {
        user,
        error,
        isLoading,
        admin,
        setUser,
        setError,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;