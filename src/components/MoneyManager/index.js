import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    values: {balance: 0, income: 0, expenses: 0},
    table: [],
  }

  titleChange = e => {
    this.setState({title: e.target.value})
  }

  amountChange = e => {
    this.setState({amount: e.target.value})
  }

  typeChange = e => {
    this.setState({type: e.target.value})
  }

  formSubmit = e => {
    e.preventDefault()
    const {title, amount, type} = this.state
    const totalIncome = type === 'INCOME' ? parseInt(amount) : 0
    const totalExpenses = type === 'EXPENSES' ? parseInt(amount) : 0
    const newObject = {
      id: uuidv4(),
      titles: title,
      amounts: parseInt(amount),
      types: type,
    }
    this.setState(prevState => ({
      values: {
        balance:
          parseInt(prevState.values.balance) - totalExpenses + totalIncome,
        income: parseInt(prevState.values.income) + totalIncome,
        expenses: parseInt(prevState.values.expenses) + totalExpenses,
      },
      table: [...prevState.table, newObject],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onDelete = id => {
    const {table} = this.state
    const newTable = table.filter(eachObject => eachObject.id !== id)
    const dataValue = table.filter(eachObject => eachObject.id === id)
    const {types, amounts} = dataValue[0]
    const income = types === 'INCOME' ? amounts : 0
    const expenses = types === 'EXPENSES' ? amounts : 0
    this.setState(prevState => ({
      table: newTable,
      values: {
        balance: prevState.values.balance - income + expenses,
        income: prevState.values.income - income,
        expenses: prevState.values.expenses - expenses,
      },
    }))
  }

  render() {
    const {title, amount, type, values, table} = this.state
    return (
      <div className="main-container">
        <div className="top-div">
          <h1 className="main-heading">Hi, Richard</h1>
          <p className="top-para">
            Welcome back to your <span className="color-it">Money Manager</span>
          </p>
        </div>
        <MoneyDetails values={values} />
        <div className="bottom-container">
          <div className="form-element">
            <form className="form" onSubmit={this.formSubmit}>
              <h1 className="form-heading">Add Transaction</h1>
              <label className="form-label" htmlFor="input1">
                TITLE
              </label>
              <input
                type="text"
                className="title"
                id="input1"
                placeholder="TITLE"
                onChange={this.titleChange}
                value={title}
              />
              <label className="form-label" htmlFor="input2">
                AMOUNT
              </label>
              <input
                type="text"
                className="title"
                id="input2"
                placeholder="AMOUNT"
                onChange={this.amountChange}
                value={amount}
              />
              <label className="form-label" htmlFor="input3">
                TYPE
              </label>
              <select
                className="title"
                id="input3"
                onChange={this.typeChange}
                value={type}
              >
                {transactionTypeOptions.map(eachObject => (
                  <option key={eachObject.optionId} value={eachObject.optionId}>
                    {eachObject.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>
          <div className="table-div">
            <h1 className="table-heading">History</h1>
            <ul className="ul-list">
              <li className="table-list">
                <p className="title-list">Title</p>
                <p className="title-list">Amount</p>
                <p className="title-list type">Type</p>
              </li>
              {table.map(eachValue => (
                <TransactionItem
                  key={eachValue.id}
                  data={eachValue}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
