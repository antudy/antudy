import {initializeApp} from 'firebase/app';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import config from '../firebase.json';
import { signInWithEmailAndPassword } from 'firebase/auth';

const app = initializeApp(config);

const Auth = getAuth(app);



export const login = async ({ email, password}) => {

   const {user} = await signInWithEmailAndPassword(Auth, email, password);

   return user;

};

export const signup = async ( { email, password }) => {
  const { user } = await createUserWithEmailAndPassword(Auth, email, password);
  return user;
}