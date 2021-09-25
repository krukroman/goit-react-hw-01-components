import s from './Profile.module.css';
import PropTypes from 'prop-types';
import defImg from './256px-No_image_available.svg.png';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={s.container}>
      <div className={s.profile} key={tag}>
        <div className={s.description}>
          <img className={s.avatar} src={avatar} alt={name} />
          <p className={s.name}>{name}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
        <ul className={s.stats}>
          <li>
            <span className={s.label}>Followers</span>
            <span className={s.qauntity}>{stats.followers}</span>
          </li>
          <li>
            <span className={s.label}>Views</span>
            <span className={s.qauntity}>{stats.views}</span>
          </li>
          <li>
            <span className={s.label}>Likes</span>
            <span className={s.qauntity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  name: 'No name',
  tag: 'No tag',
  location: 'No location',
  avatar: defImg,
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
