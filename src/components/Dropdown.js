import classes from "./Dropdown.module.css";
// src: https://andela.com/insights/react-js-tutorial-on-creating-a-custom-select-dropdown/
// alternative: https://blog.logrocket.com/customize-reusable-react-dropdown-menu-component/
const Dropdown = () => {
    return (
        <div className={classes.dropdown}>
            <div className={classes.selecteddropdown}>Mangoes</div>
            <>
                <ul className={classes.listdropdown}>
                    <li>Mangoes</li>
                    <li>Apples</li>
                    <li>Oranges</li>
                </ul>
            </>
        </div>
    );
}

export default Dropdown;