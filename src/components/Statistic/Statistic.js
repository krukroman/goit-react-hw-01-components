import s from './Statistic.module.css';
import PropTypes from 'prop-types';

export default function Statistic({ title, stats }) {
  return (
    <section className={s.statistics}>
      <div className={s.container}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.stat_list}>
          {stats.map(stat => {
            return (
              <li
                className={s.item}
                key={stat.id}
                style={{ backgroundColor: generateDarkColorRgb() }}
              >
                <span className={s.label}>{stat.label}</span>
                <span className={s.percentage}>{stat.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

function generateDarkColorRgb() {
  const red = Math.floor((Math.random() * 256) / 2);
  const green = Math.floor((Math.random() * 256) / 2);
  const blue = Math.floor((Math.random() * 256) / 2);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
