import React from 'react';
import logo from '../../assets/favicon/favicon.png';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <div className={css.homePageText}>
        <div className={css.homePageTitle}>
          <img src={logo} alt="logo" width="40px" height="40px" />
          <h1>СampersPark</h1>
        </div>

        <h2>СampersPark - це будинки на колесах, в яких хочеться жити</h2>

        <div>
          <p>Збираєтесь у подорож?</p>
          <p>Не хочете бути прив'язаним до одного місця?</p>
          <p>Плануєте придбати кемпер і потрібен тест-драйв?</p>
        </div>

        <h2>Все це можна влаштувати з СampersPark, взявши кемпер в оренду! </h2>
        <h2>Переглянь каталог, замовляй та насолоджуйся! </h2>
      </div>
    </div>
  );
};

export default HomePage;

{
  /* <h2>A good camper will ensure a comfortable life! </h2>
        <h2>Look through our catalog</h2>
        <h2> Order </h2>
        <h2>And enjoy the trip!</h2> */
}
