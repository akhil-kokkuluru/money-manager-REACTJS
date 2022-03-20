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
        </div>
      </div>
    )
  }
}

export default MoneyManager
