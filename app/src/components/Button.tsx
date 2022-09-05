import React, { FC } from 'react'

interface ButtonProps {
  handleClick: () => void
}

export const Button: FC<ButtonProps> = ({ handleClick }) => {
  return (
  <button onClick={handleClick}>Create Task</button>)
}
