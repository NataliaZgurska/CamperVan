import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
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
              Home
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
    </header>
  );
};
