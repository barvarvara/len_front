import React from 'react';
import "./AboutSection.scss"
import Link from "../../../../components/ui/CustomLink/Link";
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="about container">
      <div className="about__quote">
        <p> &ldquo;Гончарка &mdash; это способ вернуться в детство
          &mdash; с его восторгом и тихой радостью,
          постоянными открытиями и новыми свершениями,
          когда каждый день покоряешь свой Эверест,
          а когда устанешь &mdash; можно попить вкусного чая с печенькой
          &mdash; и все будет хорошо.
          <br/>
          Обязательно!&rdquo;
        </p>

        <p className="about__quote-author">
          Алёна Кичичиди
          <span> основатель студии </span>
        </p>
      </div>

      <Link title="О гончарке"
            addStyle="about__link"
            onPress={() => navigate("/admin")}
      />

      <img className="about__photo" src={require("./assets/alena5-sqr.jpg")} alt=""/>
    </section>
  );
};

export default AboutSection;