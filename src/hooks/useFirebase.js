import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');

                // redirect url
                const from = location?.state?.from || '/';
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err);
            })
            .finally(setIsLoading(false));
    }

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

    return {
        user,
        error,
        isLoading,
        setUser,
        setError,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;