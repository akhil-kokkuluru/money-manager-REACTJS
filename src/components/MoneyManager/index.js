import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'

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
  render() {
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
            <MoneyDetails />
          </div>
          <div className="tables">
            <div className="leftTableContainer">
              <form className="leftTable">
                <h1 className="table-Heading">Add Transaction</h1>
                <label className="labelCss" htmlFor="title">
                  TITLE
                </label>
                <input
                  className="inputcss"
                  type="text"
                  placeholder="TITLE"
                  id="title"
                />
                <label className="labelCss" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  className="inputcss"
                  type="text"
                  placeholder="TITLE"
                  id="amount"
                />
                <label className="labelCss" htmlFor="options">
                  TYPE
                </label>
                <select id="options" className="inputcss">
                  {transactionTypeOptions.map(item => (
                    <option className="options" value={item.optionIds}>
                      {item.displayText}
                    </option>
                  ))}
                </select>
                <button className="buttonAdd" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="rightTableContainer">
              <h1 className="historyCss">History</h1>
              <div className="historyContainer">
                <h1 className="Hitems">Title</h1>
                <h1 className="Hitems">Amount</h1>
                <h1 className="Hitems">Type</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
