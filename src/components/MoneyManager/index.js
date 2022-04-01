import './index.css'
import {v4} from 'uuid'
import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

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

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    transactionList: [],
  }

  onTitleTyping = event => {
    this.setState({title: event.target.value})
  }

  onAmountTyping = event => {
    this.setState({amount: event.target.value})
  }

  onTypeSelection = event => {
    this.setState({type: event.target.value})
  }

  onSubmitting = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const transactionItem = {
      idVal: v4(),
      titleVal: title,
      amountVal: parseInt(amount),
      typeVal: type,
      value: type.toUpperCase(),
    }

    this.setState(prevValue => ({
      transactionList: [...prevValue.transactionList, transactionItem],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
    }))
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmountValue = 0
    transactionList.forEach(item => {
      if (item.typeVal === transactionTypeOptions[0].optionId) {
        incomeAmountValue += parseInt(item.amountVal)
      }
    })
    return incomeAmountValue
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmountValue = 0
    transactionList.forEach(item => {
      if (item.typeVal === transactionTypeOptions[1].optionId) {
        expensesAmountValue += parseInt(item.amountVal)
      }
    })
    return expensesAmountValue
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(element => {
      if (element.typeVal === transactionTypeOptions[0].optionId) {
        incomeAmount += parseInt(element.amountVal)
      } else {
        expensesAmount += parseInt(element.amountVal)
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  onclickDelete = idValue => {
    const {transactionList} = this.state
    this.setState({
      transactionList: transactionList.filter(
        valueID => valueID.idVal !== idValue,
      ),
    })
  }

  render() {
    const {transactionList, type, amount, title} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="totalContainer">
        <div className="contentContainer">
          <div className="WelcomeContainer">
            <h1 className="heading">Hi, Richard</h1>
            <p className="para1">
              Welcome back to your <span className="spanEl">Money Manager</span>
            </p>
          </div>
          <div className="moneyDetailsContainer">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>
          <div className="tables">
            <div className="leftTableContainer">
              <form className="leftTable" onSubmit={this.onSubmitting}>
                <h1 className="table-Heading">Add Transaction</h1>
                <label className="labelCss" htmlFor="title">
                  TITLE
                </label>
                <input
                  className="inputcss"
                  type="text"
                  placeholder="TITLE"
                  value={title}
                  id="title"
                  onChange={this.onTitleTyping}
                />
                <label className="labelCss" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  className="inputcss"
                  type="text"
                  placeholder="AMOUNT"
                  id="amount"
                  value={amount}
                  onChange={this.onAmountTyping}
                />
                <label className="labelCss" htmlFor="options">
                  TYPE
                </label>
                <select
                  id="options"
                  className="inputcss"
                  onChange={this.onTypeSelection}
                  value={type}
                >
                  {transactionTypeOptions.map(item => (
                    <option
                      className="options"
                      value={item.optionId}
                      key={item.optionId}
                    >
                      {item.displayText}
                    </option>
                  ))}
                </select>
                <button
                  className="buttonAdd"
                  type="submit"
                  onClick={this.onSubmitting}
                >
                  Add
                </button>
              </form>
            </div>
            <ul className="rightTableContainer">
              <h1 className="historyCss">History</h1>
              <li className="historyContainer">
                <p className="Hitems">Title</p>
                <p className="Hitems">Amount</p>
                <p className="Hitems">Type</p>
              </li>

              {transactionList.map(item => (
                <TransactionItem
                  id={item.idVal}
                  key={item.idVal}
                  title={item.titleVal}
                  amount={item.amountVal}
                  type={item.typeVal}
                  onclickDelete={this.onclickDelete}
                  value={item.value}
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
