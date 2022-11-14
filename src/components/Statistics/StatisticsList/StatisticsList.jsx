import css from './StatisticsList.module.css';
import PropTypes from 'prop-types';

export const StatisticsList = ({ label, percentage }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </>
  );
};

StatisticsList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
