import {useState, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signUpUsingEmailAndPassword = async (
    email: string,
    password: string,
  ) => {
    setIsLoading(true);
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      console.log(res);
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
      return res;
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log(user.uid);
      } else {
        setUser(null);
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
