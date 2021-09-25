import s from './Profile.module.css';
import propTypes from 'prop-types';

export default function Profile({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
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
          <span className={s.qauntity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.qauntity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.qauntity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};
