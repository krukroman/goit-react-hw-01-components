import s from './FriendList.module.css';
import FriendItem from '../FriendItem/FriendItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <section className={s.section}>
      <ul className={s.friend_list}>
        {friends.map(friend => {
          return (
            <FriendItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ).isRequired,
};
