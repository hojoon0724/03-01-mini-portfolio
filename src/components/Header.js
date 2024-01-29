function Header(props) {
  return (
    <div className="header">
      <div className="header-left">Hojoon Kim</div>
      <div className="header-right">
        <a href={props.github}>GitHub</a>
        <a href={props.linkedin}>LinkedIn</a>
      </div>
    </div>
  )
}
export default Header
