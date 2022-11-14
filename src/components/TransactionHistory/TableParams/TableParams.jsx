import PropTypes from 'prop-types';

import css from './TableParams.module.css';

export const TableParams = ({ type, amount, currency }) => {
  return (
    <>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </>
  );
};

TableParams.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
