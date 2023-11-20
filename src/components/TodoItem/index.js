import './index.css'

// Write your code here
const TodoItem = props => {
  const {handleClick} = props
  const {id, todo} = props

  const onDelete = () => {
    handleClick(id)
  }
  return (
    <li className="itemContainer">
      <p>{todo}</p>
      <button onClick={onDelete} type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
