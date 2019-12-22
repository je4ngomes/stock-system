import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const useAuthReady = () => {
  const auth = useSelector(state => state.firebase.auth);

  return isLoaded(auth);
};

export default useAuthReady;