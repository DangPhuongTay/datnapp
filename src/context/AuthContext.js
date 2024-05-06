import axios from 'axios';
import React, { createContext, useState } from 'react';
import {BASE_URL} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export let AuthContext = createContext();

export const AuthProvider =  ({children}) => {
   let [userInfo, setUserInfo] = useState({});
   let [isLoading, setIsLoading] = useState(false);

   const register = (name, email, password) => {
      setIsLoading(true);
      axios
      .post(`${BASE_URL}/register`,{
         name,
         email,
         password,
      }).then(res => {
         let userInfo = res.data;
         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
         setIsLoading(false);
      }).catch(e => {
         console.log(`register error: ${e}`);
         setIsLoading(false);
      });
   };

   const login = async (email, password) => {
      setIsLoading(true);

      axios
      .post(`${BASE_URL}/login`,{
         email,
         password,
      }).then( res => {
         let userInfo = res.data.data;
         setUserInfo(userInfo);
         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
         setIsLoading(false);
      }).catch(e => {
         console.log(`login error: ${e}`);
         setIsLoading(false);
      });
   };

   const logout = async () =>{
      setIsLoading(true);
      setUserInfo(null);
      setIsLoading(false);
   }
   return (
         <AuthContext.Provider value={{
                  isLoading,
                  userInfo,
                  register,
                  login,
                  logout,
               }}>
               {children}
         </AuthContext.Provider>
      );
}