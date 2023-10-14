import { StatisticItem } from './StatisticItem';
import propTypes from 'prop-types';
import css from './Statistics.module.css'


export const Statistics = ({ title, stats }) => {
    return (
    <section className={css.statistics}>
        {title ? <h2 className={css.title}>{title}</h2> : ''}
            
         <ul className={css.statsList}>
        {stats.map(item => (
          <StatisticItem  key={item.id} dataItem={item} />
        ))}
      </ul>
    </section>);
}

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(
        propTypes.shape({
        id: propTypes.string.isRequired,
    })
  ).isRequired,
}