import propTypes from 'prop-types';
import css from './StatisticItem.module.css'


export const StatisticItem = ({ dataItem: { label, percentage } }) => {
     
    return (
        
    <li  className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
    
    )
}

StatisticItem.propTypes = {
    dataItem: propTypes.shape({
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }).isRequired,
}