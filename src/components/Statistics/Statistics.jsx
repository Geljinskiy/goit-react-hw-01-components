import { StatisticsHeading } from './StatisticsHeading/StatisticsHeading';
import { StatisticsList } from './StatisticsList/StatisticsList';
import css from './Statistics.module.css';
import { getRandomHexColor } from 'components/colorSwitcher/colorSwitcher';

import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <StatisticsHeading>{title}</StatisticsHeading>}
      <ul className={css.statList}>
        {stats.map(statsItem => {
          return (
            <li
              style={{ backgroundColor: getRandomHexColor() }}
              className={css.item}
              key={statsItem.id}
            >
              <StatisticsList
                label={statsItem.label}
                percentage={statsItem.percentage}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
