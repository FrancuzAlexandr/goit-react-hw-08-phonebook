import PropTypes from 'prop-types';
import css from './Error.module.css';

export const Error = ({ message }) => {
  return <div className={css.container}>{message}</div>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
