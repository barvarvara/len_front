import './MasterClassesPage.scss';
import React, {useEffect} from "react"
import MasterClassCard from "./components/MasterClassCard";

export type MasterclassProps = {}

const MasterClassesPage: React.FC<MasterclassProps> = () => {
  useEffect(() => {
    document.title = "Мастер-классы и другое";
  }, []);


  return (
    <>
      <h1 className="container-title">Мастер-классы и мероприятия</h1>

      <section className="masterclasses-container">
        <h2>Мастер-классы (свободная лепка)</h2>

        <div className="cards">
          <MasterClassCard title="За столом"
                           description="Свободная лепка &mdash; это лепить, что хочешь, получать радость от творчества и создавать своими руками предметы домашнего обихода с душой"
                           imgSrc="./assets/hands.jpg"
                           imgAlt="Свободная лепка"
          />

          <MasterClassCard title="За кругом"
                           description="Свободная лепка &mdash; это лепить, что хочешь, получать радость от творчества и создавать своими руками предметы домашнего обихода с душой"
                           imgSrc="./assets/hands-potter.jpg"
                           imgAlt="Лепка за гончарным кругом"
          />

        </div>
      </section>

      <section className="kids masterclasses-container">
        <h2>Детское время</h2>

        <div className="cards">
          <MasterClassCard title="Утренняя детская группа"
                           description="Приводите ребенка к нам провести утро в доброй среде среди друзей"
                           imgSrc="./assets/kid.jpg"
                           imgAlt="Утренняя детская группа"
          />

          <MasterClassCard title="Семейная лепка"
                           description="Отдыхаем и лепим всей семьей! ЛЁН &mdash; территория детей без гаджетов. Это развитие моторики и художественного восприятия действительности, возможность реализовать творческие идеи, получить удовольствие не только от результата, но и от самого процесса."
                           imgSrc="./assets/hands2.jpg"
                           imgAlt="Семейная лепка"
          />
        </div>
      </section>

      <section className="masterclasses-container">
        <h2>Мероприятия</h2>

        <div className="cards">

          <MasterClassCard title="День рождения"
                           description="Приглашаем именинников для проведения Вашего идеального творческого мероприятия! Такой формат праздника удобен тем, что каждый сможет попробовать себя в гончарном деле"
                           imgSrc="./assets/birthday.jpg"
                           imgAlt="День рождения"
          />

          <MasterClassCard title="Свидание"
                           description="Удивите вторую половинку, устроив романтическое свидание в Гончарке — это романтическое, незабываемое и очень интересное занятие, которое понравится каждому! Можно устроить фотосессию с профессиональным фотографом!"
                           imgSrc="./assets/date-hands2.jpg"
                           imgAlt="Свидание"
          />

          <MasterClassCard title="Корпоратив"
                           description=""
                           imgSrc="./assets/hands.jpg"
                           imgAlt="Корпоратив"
          />

          <MasterClassCard title="Выездной мастер-класс"
                           description=""
                           imgSrc="./assets/hands-chakra.jpg"
                           imgAlt="Выездной мастер-класс"
          />

          <MasterClassCard title="Девичник"
                           description="Устройте себе и подружкам незабываемый девичник в атмосфере Гончарки!"
                           imgSrc="./assets/hands.jpg"
                           imgAlt="Девичник"
          />

        </div>
      </section>
    </>
  )
}

export default MasterClassesPage;