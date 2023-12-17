import './Header.scss';
import Logo from '../Logo';
import React from 'react';
import Button from '../Button';
import { User } from '../../../types/types';
import { useDispatch } from 'react-redux';
import authSlice from '../../../store/auth.slice';

export type HeaderProps = {
  isMain: boolean,
  user?: User | null
}

const Header: React.FC<HeaderProps> = ({
  isMain,
  user
}) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
  }

  return (
    <header className="container-header">
      <Logo/>

      <nav>
        {isMain &&
          <ul className="header__nav">
            <li className="header__dropdown">
              <a href="/" className="header__nav-link header__nav-link_dropdown">
                Услуги
              </a>

              <div className="header__dropdown-container">
                <ul className="header__dropdown-menu">
                  <li><a href="/masterclasses"> Мастер-классы и мероприятия </a></li>
                  <li><a href="/"> Сертификаты </a></li>
                  <li><a href="/"> Магазин керамики </a></li>
                </ul>
              </div>
            </li>

            <li><a href="/" className="header__nav-link"> Контакты </a></li>
            <li><a href="/" className="header__nav-link"> Расписание </a></li>
            <li><a href="/" className="header__nav-link"> О нас </a></li>

          </ul>
        }

        {/*{!isMain &&*/}
        {/*  <ul className="header__nav">*/}
        {/*    <li><a href="/" className="header__nav-link"> Расписание </a></li>*/}
        {/*  </ul>*/}
        {/*}*/}
      </nav>

      {isMain &&
        <a href="/login" className="header__user-icon"> </a>
      }

      {!isMain && user &&
        <>
          <div className="header__dropdown">
            <a href="/login" className="header__user-icon_dropdown"> </a>

            <div className="header__dropdown-container">
              <div className="header__dropdown-user">
                <div className="header__dropdown-user__items">
                  <h4> {user.username} </h4>
                  <p> {user.phone} </p>
                  <p> {user.email} </p>
                  <Button onPress={handleLogout} title={'Выйти'}/>
                </div>

              </div>
            </div>

          </div>
        </>
      }
    </header>
  )
}

export default Header;