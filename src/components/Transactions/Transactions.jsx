
import propTypes from 'prop-types';
import css from './Transactions.module.css'
import { TransactionItem} from './TransactionItem'

export const Transactions = ({ transactions }) => {
    return (
          <table className={css.transactionHistory}>
  <thead>
    <tr className={css.headTable}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
</thead>
    <tbody className={css.transactionItem} >
                {transactions.map(transaction => (
                    <TransactionItem key={transaction.id} Transaction={transaction} />))}
</tbody>
  
</table>         
      
);
}

Transactions.propTypes = {
    transactions: propTypes.arrayOf(
        propTypes.shape({
        id: propTypes.string.isRequired,
    })
  ).isRequired,
} 