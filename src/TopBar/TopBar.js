import classes from "./TopBar.module.css"
const TopBar = (props) => {
    return(
        <nav className={classes.TopBar}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fZgNzz5DgrvP-6hWhS0CIUs73D5N8FD4pm0Jb4cgFUAx1YL93Q9XazaMTnKIQV5Sg4E&usqp=CAU" alt="Amazon-logo"/>
        </nav>
    );
}
export default TopBar;