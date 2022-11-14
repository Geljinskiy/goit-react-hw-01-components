import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        style={{ backgroundColor: isOnline ? '#ff4f50' : '#46b149' }}
        className={css.status}
      ></span>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};