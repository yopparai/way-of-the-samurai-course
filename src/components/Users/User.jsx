import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default-user-avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";

const User = (
    {
        user,
        follow,
        followingInProgress,
        unfollow,
    }
) => <div key={user.id}>
    <span>
        <div>
            <NavLink to={`/profile/${user.id}`}>
                <img src={user.photos.small ?? userPhoto} className={styles.userPhoto}/>
            </NavLink>
        </div>
        <div>
            {user.followed
                ? <button
                    disabled={followingInProgress.some(id => user.id === id)}
                    onClick={() => {
                        unfollow(user.id)
                    }}
                >Unfollow</button>
                : <button
                    disabled={followingInProgress.some(id => user.id === id)}
                    onClick={() => {
                        follow(user.id)
                    }}
                >Follow</button>}
        </div>
    </span>
    <span>
        <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
        </span>
    </span>
</div>

export default User
