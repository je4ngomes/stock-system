import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useRedirectAuthenticatedUser = ({ redirectAdminTo, redirectUserTo }, deps) => {
    const history = useHistory(); 
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const user = firebase.auth().currentUser;

        if (!user) return setLoading(false);

        user.getIdTokenResult()
            .then(({ claims: { isAdmin } }) => (
                history.push(isAdmin ? redirectAdminTo : redirectUserTo)
            )).then(_ => setLoading(false));
    }, [deps]);

    return isLoading;
};

export default useRedirectAuthenticatedUser;