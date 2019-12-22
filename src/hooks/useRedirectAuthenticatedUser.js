import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const useRedirectAuthenticatedUser = ({ redirectAdminTo, redirectUserTo }, deps) => {
    const history = useHistory(); 

    useEffect(() => {
        const user = firebase.auth().currentUser;

        if (!user) return ;

        user.getIdTokenResult()
            .then(({ claims: { isAdmin } }) => (
                history.push(isAdmin ? redirectAdminTo : redirectUserTo)
            ))
    }, [deps]);
};

export default useRedirectAuthenticatedUser;