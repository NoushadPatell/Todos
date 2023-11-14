import React, { useState } from 'react'

export function NewTodoForm( {addTodo} ) {

  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if(newItem === "") return

    addTodo(newItem)

    setNewItem("")
  }


  return <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form_head">
  <div className="form-row">
    <label htmlFor="item">MY TODOS</label>
    <input
      type="text"
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)}
      id="item"
    />
  </div>
  <button className="btn">Save</button>
  </div>
</form>
}

export default NewTodoForm