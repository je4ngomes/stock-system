import { useEffect } from 'react';
import firebase from 'firebase';

const useOnAuthChange = (actionObserverFn) => {

    useEffect(() => {
        const unsubcribeObserver = firebase.auth().onAuthStateChanged(actionObserverFn);

        return () => unsubcribeObserver();
    }, []);
};

export default useOnAuthChange;