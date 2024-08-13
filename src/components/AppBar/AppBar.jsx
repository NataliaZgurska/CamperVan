import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa6';
import logo from '../../assets/favicon/favicon.png';
import css from './AppBar.module.css';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.navContainer}>
          <li>
            <NavLink to="/" className={getNavLinkClassName}>
              <div className={css.navLogoHome}>
                <img src={logo} alt="logo" width="40px" height="40px" />
                Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog" className={getNavLinkClassName}>
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={getNavLinkClassName}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <address className={css.headerTel}>
        <FaPhone />
        <a href="tel: +380688601188">+38(068)860-1188</a>
      </address>
    </header>
  );
};
