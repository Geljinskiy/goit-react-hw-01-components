import PropTypes from 'prop-types';

import { MainUserCard } from './MainUserCard/MainUserCard';
import { UserDescribeItem } from './UserDescribeItem/UserDescribeItem';

import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <MainUserCard
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <ul className={css.stats}>
        {Object.entries(stats).map(stat => {
          return (
            <li className={css.statsItem} key={stat[1]}>
              <UserDescribeItem unit={stat[0]} amount={stat[1]} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
