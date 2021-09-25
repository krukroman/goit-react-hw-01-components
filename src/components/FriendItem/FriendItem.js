import s from './FriendItem.module.css';
import PropTypes from 'prop-types';
import defImg from './256px-No_image_available.svg.png';

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendItem.defaultProps = {
  avatar: defImg,
  name: 'no name',
  isOnline: false,
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
