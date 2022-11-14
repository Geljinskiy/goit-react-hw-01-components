import css from './StatisticsHeading.module.css';
import PropTypes from 'prop-types';

export const StatisticsHeading = ({ children }) => {
  return <h2 className={css.title}>{children}</h2>;
};

StatisticsHeading.propTypes = {
  children: PropTypes.string,
};
