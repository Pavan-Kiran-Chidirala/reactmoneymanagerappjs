// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {values} = props
  const {balance, income, expenses} = values
  return (
    <ul className="middle-ul">
      <li className="money-list list1" key="1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="content-div">
          <p className="name">Your Balance</p>
          <p className="amount" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </li>
      <li className="money-list list2" key="2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="content-div">
          <p className="name">Your Income</p>
          <p className="amount" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </li>
      <li className="money-list list3" key="3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div className="content-div">
          <p className="name">Your Expenses</p>
          <p className="amount" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
