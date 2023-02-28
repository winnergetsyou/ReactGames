//CodePen
class MyFirstReactClass extends React.Component
{
  render()
  {
    return(
    <div> Welcome to React </div>)

  }
}
const Variable = ReactDOM.createRoot(document.getElementById("myFirstReact"))
Variable.render(<MyFirstReactClass />);
