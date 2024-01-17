import React, { useEffect, useState } from 'react'
import Logo from '../../components/ui/Logo';
import './LoginPage.scss'
import TextInput from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import { useLoginMutation } from '../../logic/user/userAuth.api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../../store';
import { showToast } from '../../services/alertServices';

export type LoginPageProps = {}


const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Вход';
  }, []);

  const { user } = useSelector(userSelector)

  const USER_INITIAL = {
    username: user ? user.username : '',
    password: '',
  }

  const [login] = useLoginMutation()
  const [userInfo, setUserInfo] = useState(USER_INITIAL)

  const setUserName = (username: string) => {
    console.log(userInfo)
    setUserInfo({ username: username, password: userInfo.password })
  }

  const setPassword = (password: string) => {
    console.log(userInfo)
    setUserInfo({ username: userInfo.username, password: password })
  }

  const handleLogin = async () => {
    if (userInfo) {
      login(userInfo).unwrap()
        .then((payload) => navigate('/admin'))
        .catch((error) => showToast(error.message.detail, 'error'))
    }
  }

  return (
    <main>
      <section className="login-container">
        <div className="login">
          <Logo addStyle="login__logo"/>

          <form>
            <TextInput placeholder="Имя пользователя"
                       addStyle="form-text-input"
                       value={userInfo.username}
                       onChangeText={setUserName}
                       inputType={'text'}
            />

            <TextInput placeholder="Пароль"
                       addStyle="form-text-input"
                       value={userInfo.password}
                       onChangeText={setPassword}
                       inputType={'password'}
            />

            <Button type="submit"
                    addStyleClass="btn__login"
                    onPress={handleLogin}
                    title={'Войти'}
            />

          </form>

          {/*<form>*/}
          {/*  <TextInput placeholder={"89012345678"}*/}
          {/*             label={"Введите номер телефона, на который придет код доступа:"}/>*/}
          {/*  <button type="submit">Отправить код</button>*/}
          {/*</form>*/}

          <div className="help-link">
            <a href="/">Зарегистрироваться</a>
            <a href="/">Забыли пароль?</a>
          </div>
        </div>

      </section>
    </main>
  )
}

export default LoginPage