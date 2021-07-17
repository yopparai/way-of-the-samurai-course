import s from './FriendItem.module.css'

const FriendItem = (props) =>
    <div className={s.item}>
        <img src={props.avatar}/>
        <div>{props.name}</div>
    </div>

export default FriendItem