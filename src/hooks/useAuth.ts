import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppDispatch} from './useReduxHooks';
import {
  setUserEmail,
  setUserId,
  setUserfromCloud,
} from '../redux/slices/userSlice';
import firestore from '@react-native-firebase/firestore';
import {setLoanFromCloud} from '../redux/slices/loanSlice';

export const useAuth = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = async (user: FirebaseAuthTypes.User) => {
    const userResult = await firestore()
      .collection('Users')
      .doc(user.uid)
      .get();

    const result = userResult.data();
    if (result) {
      console.log('the data from cloud', result);
      dispatch(setLoanFromCloud(result.userData.loans));
      delete result.userData.loans;
      dispatch(setUserfromCloud(result.userData));
    } else {
      dispatch(setUserId(user.uid));
    }
  };

  const signUpUsingEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    setIsLoading(true);
    return new Promise(async (resolve, reject) => {
      try {
        const res = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log(res.user);
        if (res.user.email) {
          dispatch(setUserEmail(res.user.email));
        }
        resolve(res.user);
      } catch (error: any) {
        console.log(error);
        reject(undefined);
      } finally {
        setIsLoading(false);
      }
    });
  };

  const signInUsingEmailAndPassword = (email: string, password: string) => {
    setIsLoading(true);

    return new Promise(async (resolve, reject) => {
      try {
        const res = await auth().signInWithEmailAndPassword(email, password);
        console.log(res.user);
        if (res.user.email) {
          dispatch(setUserEmail(res.user.email));
        }
        checkUser(res.user);
        resolve(res.user);
      } catch (error: any) {
        console.log(error);
        reject(undefined);
      } finally {
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      console.log('user after auth: ', user);
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
