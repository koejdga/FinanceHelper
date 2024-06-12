import { initializeApp } from 'firebase/app';
import {Platform} from "react-native";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Firebase
const firebaseConfig = (Platform.OS === 'ios')?{
    apiKey: 'AIzaSyBHRkeJBoU83STzH0owgoKrNeBnNtVaxMQ',
    authDomain: 'finance-helper-auth.firebaseapp.com',
    databaseURL: 'https://finance-helper-auth.firebaseio.com',
    projectId: 'finance-helper-auth',
    storageBucket: 'finance-helper-auth.appspot.com',
    appId: '1:67009919181:ios:ab863b3e4fc4502f211184'
}:{
    apiKey: 'AIzaSyAcUrk1WN9NDOtpda7gzacEZ2rDsaVJShc',
    authDomain: 'finance-helper-auth.firebaseapp.com',
    databaseURL: 'https://finance-helper-auth.firebaseio.com',
    projectId: 'finance-helper-auth',
    storageBucket: 'finance-helper-auth.appspot.com',
    appId: '1:67009919181:android:181cace9469d01f5211184'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const appAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
