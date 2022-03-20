import './index.css'

const MoneyDetails = () => (
  <div className="moneyDetailsContainer2">
    <div className="balanceContainer">
      <img
        className="imageCSS"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
      />

      <div className="textContainer">
        <p className="balanceText">Your Balance</p>
        <h1 className="amountText">Rs 4000</h1>
      </div>
    </div>
    <div className="IncomeContainer">
      <img
        className="imageCSS"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
      />

      <div className="textContainer">
        <p className="balanceText">Your Income</p>
        <h1 className="amountText">Rs 4000</h1>
      </div>
    </div>
    <div className="ExpensesContainer">
      <img
        className="imageCSS"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
      />

      <div className="textContainer">
        <p className="balanceText">Your Expenses</p>
        <h1 className="amountText">Rs 4000</h1>
      </div>
    </div>
  </div>
)

export default MoneyDetails
