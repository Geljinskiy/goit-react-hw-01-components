import PropTypes from 'prop-types';

import { TableParams } from './TableParams/TableParams';

import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tHead}>
        <tr>
          <th className={css.tHeadItem}>Type</th>
          <th className={css.tHeadItem}>Amount</th>
          <th className={css.tHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tBody}>
        {items.map(item => {
          return (
            <tr className={css.tBodyItem} key={item.id}>
              <TableParams
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
