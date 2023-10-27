import React, {useEffect} from "react"
import Logo from "../../components/ui/Logo";
import "./LoginPage.scss"

export type LoginPageProps = {}

const LoginPage: React.FC<LoginPageProps> = () => {
  useEffect(() => {
    document.title = "Вход";
  }, []);

  return (
    <main>
      <section className="login-container">

        <div className="login">
          <Logo addStyle="login__logo"/>

          <form>
            <div className="login__input">
              <label> <input className="form-text-input" placeholder="89012345678"/> </label>
            </div>
            <div className="login__input">
              <label> <input className="form-text-input" placeholder="Пароль"/> </label>
            </div>
            <button type="submit">Войти</button>
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