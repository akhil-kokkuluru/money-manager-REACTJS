import './index.css'

const TransactionItem = props => {
  const {id, title, amount, onclickDelete, value} = props

  const onDeleteClick = () => {
    onclickDelete(id)
  }

  const rupees = amount ? `Rs ${amount}` : ''
  return (
    <li className="transactionContainer">
      <div className="transaction-item">
        <h1 className="Titems">{title}</h1>
        <h1 className="Titems">{rupees}</h1>
        <h1 className="Titems">{value}</h1>
      </div>
      <button
        className="buttons"
        testid="delete"
        type="button"
        onClick={onDeleteClick}
      >
        <img
          alt="delete"
          className="imgCss"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}
export default TransactionItem
