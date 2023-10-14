import propTypes from 'prop-types';


export const TransactionItem = ({ Transaction: { type, amount, currency } }) => {
     
    return (
    
    <tr>
      <td >{type}</td>
      <td >{amount}</td>
     <td>{currency}</td>
    </tr>
    )
}

TransactionItem.propTypes = {
   Transaction: propTypes.shape({
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
  }).isRequired,
}