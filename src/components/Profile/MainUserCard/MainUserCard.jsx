import PropTypes from 'prop-types';
import css from './MainUserCard.module.css';

export const MainUserCard = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img
        className={css.avatar}
        src={avatar}
        alt={username}
        width="110px"
        height="110px"
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

MainUserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
