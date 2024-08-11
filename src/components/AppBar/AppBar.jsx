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
      <nav className={css.navContainer}>
        <NavLink to="/" className={getNavLinkClassName}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getNavLinkClassName}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={getNavLinkClassName}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
