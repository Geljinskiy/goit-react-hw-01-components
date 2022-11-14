import PropTypes from 'prop-types';
import css from './UserDesribeItem.module.css';

export const UserDescribeItem = ({ unit, amount }) => {
  return (
    <>
      <span className={css.label}>{unit}</span>
      <span className={css.quantity}>{amount}</span>
    </>
  );
};

UserDescribeItem.propTypes = {
  unit: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
