import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="moneyDetailsContainer2">
      <div className="balanceContainer">
        <img
          alt="balance"
          className="imageCSS"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />

        <div className="textContainer">
          <p className="balanceText">Your Balance</p>
          <p className="amountText" testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="IncomeContainer">
        <img
          alt="income"
          className="imageCSS"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />

        <div className="textContainer">
          <p className="balanceText">Your Income</p>
          <p className="amountText" testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="ExpensesContainer">
        <img
          alt="expenses"
          className="imageCSS"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />

        <div className="textContainer">
          <p className="balanceText">Your Expenses</p>
          <p className="amountText" testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
