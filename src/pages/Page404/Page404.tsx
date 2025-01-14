import React, { memo } from 'react';
import Link from '../../components/ui/Link';
import { useNavigate } from "react-router-dom";

export type Page404Props = {};

const Page404: React.FC<Page404Props> = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="center">
        <h3 className="whiteText">
          Извините, страница не найдена!
        </h3>
        <div className="button">
          <Link
            title={'Вернуться'}
            onPress={() => navigate("/")}
          />
        </div>
      </div>
    </div>
  );
};

Page404.defaultProps={}

const MemorizedComponent = memo(Page404);
export { MemorizedComponent as Page404 };