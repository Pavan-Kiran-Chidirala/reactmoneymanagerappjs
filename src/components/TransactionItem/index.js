// Write your code here
import './index.css'

const TransactionItem = props => {
  const {data, onDelete} = props
  const {titles, amounts, types, id} = data
  const typeValue = types === 'INCOME' ? 'Income' : 'Expenses'
  const deleteItem = () => {
    onDelete(id)
  }
  return (
    <li className="table-list2">
      <p className="title-list2">{titles}</p>
      <p className="title-list2">Rs {amounts}</p>
      <p className="title-list2">{typeValue}</p>
      <button
        type="submit"
        testid="delete"
        className="delete-btn"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          className="del-image"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
