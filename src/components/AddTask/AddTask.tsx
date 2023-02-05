import React from "react";
import './AddTask.css'

export const AddTask = () => {
  return (
    <form className="form">
      <div className="input-container">
        <input className="form-input" type="text" placeholder="Добавить задание..."/>
      </div>
      <div className="button-container">
        <button type="submit" className="form-button">Add</button>
      </div>
    </form>)
}