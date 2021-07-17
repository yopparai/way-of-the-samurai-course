import FriendItem from "./FriendItem/FriendItem";
import s from './Friends.module.css'

const Friends = (props) => {
    const friendItemElements = props.friends.map(friend =>
        <FriendItem name={friend.name} avatar={friend.avatar}/>
    )
    return <div className={s.friendsBlock}>
        <a>Friends</a>
        <div className={s.friends}>
            {friendItemElements}
        </div>
    </div>;
}

export default Friends