import React from 'react';
import Link from "../../../../components/ui/Link/Link";
import "./InvitationSection.scss"
import { useNavigate } from 'react-router-dom';

export type InvitationSectionProps = {}

const InvitationSection: React.FC<InvitationSectionProps> = () => {
  const navigate = useNavigate();

  return (
    <section className="invitation container">
      <p><strong> Приглашаем лепить и творить!</strong></p>

      <p className="invitation__address">Мы живём здесь:
        <a href="https://yandex.ru/profile/-/CDUmMZl9"> г. Белгород, ул. Архиерейская, 18
        </a>
      </p>

      <Link title={"Записаться"} addStyle="invitation__link" onPress={() => navigate("/")}/>
    </section>
  );
};

export default InvitationSection;