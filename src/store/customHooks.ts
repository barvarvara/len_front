import { useSelector } from 'react-redux';
import { userSelector } from './index';
import { useLazyAuthUserInfoQuery } from '../logic/user/userAuth.api';
import { User } from '../types/types';
import { useEffect, useState } from 'react';

const USER_INITIAL: User = {
  email: '',
  is_staff: false,
  phone: '',
  username: '',
}

export const useAuth = () => {
  const { access, refresh } = useSelector(userSelector);

  return {
    isAuth: !!access,
    access,
    refresh
  }
}

export const useUserInfo = () => {
  const [user, setUser] = useState(USER_INITIAL);
  const [getAuthUserInfo] = useLazyAuthUserInfoQuery();

  useEffect(() => {
    getAuthUserInfo().unwrap()
      .then(userData => setUser(userData))
      .catch((error) => console.log('Error!' + error.message))
  }, [getAuthUserInfo]);

  return user;
}