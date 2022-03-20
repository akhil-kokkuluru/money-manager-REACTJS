import './index.css'

const TransactionItem = () => (
  <li className="transactionContainer">
    <div className="transaction-item">
      <h1 className="Titems">Salary</h1>
      <h1 className="Titems">Rs 50000</h1>
      <h1 className="Titems">Income</h1>
    </div>
    <button className="buttons">
      <img
        className="imgCss"
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
      />
    </button>
  </li>
)

export default TransactionItem
