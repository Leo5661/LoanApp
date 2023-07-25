import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppDispatch} from './useReduxHooks';
import {
  setUserEmail,
  setUserId,
  setUserfromCloud,
} from '../redux/slices/userSlice';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

export const useAuth = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = async (user: FirebaseAuthTypes.User) => {
    const userResult = await firestore()
      .collection('Users')
      .doc(user.uid)
      .get();

    if (userResult) {
      const result = userResult.data();
      dispatch(setUserfromCloud(result?.userData));
    } else {
      dispatch(setUserId(user.uid));
    }
  };

  const signUpUsingEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    setIsLoading(true);
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      console.log(res.user);
      if (res.user.email) {
        dispatch(setUserEmail(res.user.email));
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const signInUsingEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    setIsLoading(true);
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log(res.user);
      if (res.user.email) {
        dispatch(setUserEmail(res.user.email));
      }
      checkUser(res.user);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        // dispatch(setUserEmail(user.email));
        setUser(user);
        checkUser(user);
      } else {
        setUser(null);
        dispatch(setUserfromCloud(null));
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    isLoading,
    signInUsingEmailAndPassword,
    signUpUsingEmailAndPassword,
  };
};
