
const Button = ({title , onevent , }) => {
  return (
    <div>
      <button className="btn" onClick={onevent}>{title}</button>
    </div>
  )
}

export default Button
