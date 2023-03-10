import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

export const UserMenu = ({ userName, funcAPI }) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(funcAPI());
  };

  return (
    <div className={css.userMenu}>
      <UserOutlined />
      <p className={css.userMenu__name}>Hi, {userName}!</p>
      <Button variant="contained" size="small" onClick={add}>
        Logout
      </Button>
    </div>
  );
};

UserMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  funcAPI: PropTypes.func.isRequired,
};
