import { NavLinkStyled } from './AppBar.styled';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <>
      <nav className={css.appBar}>
        <ul className={css.appBar__list}>
          <li>
            <NavLinkStyled to="/">Registration</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/login">Login</NavLinkStyled>
          </li>
        </ul>
      </nav>
    </>
  );
};
