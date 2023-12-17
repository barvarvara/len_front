import React, { useEffect, useState } from 'react'
import Logo from '../../components/ui/Logo';
import './LoginPage.scss'
import TextInput from '../../components/ui/TextInput';
import Button from '../../components/ui/Button';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../logic/user/userAuth.api';
import authSlice from '../../store/auth.slice';
import { useNavigate } from 'react-router-dom';

export type LoginPageProps = {}

const USER_INITIAL = { username: '', password: '' }

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Вход';
  }, []);

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
      await login(userInfo)
      navigate("/admin")
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
                       onChangeText={setUserName}/>

            <TextInput placeholder="Пароль"
                       addStyle="form-text-input"
                       value={userInfo.password}
                       onChangeText={setPassword}/>

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