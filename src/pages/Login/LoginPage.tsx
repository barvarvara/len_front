import React, {useEffect} from "react"
import Logo from "../../components/ui/Logo";
import "./LoginPage.scss"
import TextInput from "../../components/ui/TextInput";

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
            <TextInput placeholder={"89012345678"}
                       label={"Введите номер телефона, на который придет код доступа:"}/>
            <button type="submit">Отправить код</button>
          </form>

          {/*<div className="help-link">*/}
          {/*  <a href="/">Зарегистрироваться</a>*/}
          {/*  <a href="/">Забыли пароль?</a>*/}
          {/*</div>*/}
        </div>

      </section>
    </main>
  )
}

export default LoginPage