import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from "../Firebase/firebase.init";
import axios from "axios";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser?.email)
            const user = { email: currentUser?.email }
            if (currentUser?.email) {
                axios.post('http://localhost:3000/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false)
                        console.log('login token', res.data)
                    })
            }
            else {
                axios.post('http://localhost:3000/logout', {}, {
                    withCredentials: true
                })
                    .then(res => {
                        setLoading(false)
                        console.log('logout', res.data)
                    })
            }

        })
        return () => {
            return unSubscribe()
        }
    }, [])
    // console.log(user)
    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;