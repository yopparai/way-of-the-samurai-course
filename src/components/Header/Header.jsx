import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>
    <header className={s.header}>
        <img src='https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-221516158.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>

export default Header
