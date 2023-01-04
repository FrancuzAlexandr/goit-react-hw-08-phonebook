import { CircularProgress } from '@mui/material';
import css from './Progress.module.css';

export const Progress = () => {
  return (
    <div className={css.progress__container}>
      <CircularProgress />
    </div>
  );
};
