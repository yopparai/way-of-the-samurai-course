import styles from "./Users.module.css";
import userPhoto from "../../assets/images/default-user-avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(page => {
                    return <span
                        className={props.currentPage === page && styles.selectedPage}
                        onClick={() => props.onPageChanged(page)}
                    >{page}</span>;
                }
            )}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small ?? userPhoto} className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => u.id === id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        followAPI.unfollow(u.id)
                                            .then(resultCode => {
                                                if (resultCode === 0)
                                                    props.unfollow(u.id)
                                                props.toggleFollowingProgress(false, u.id)
                                            })
                                    }}
                                >Unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => u.id === id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        followAPI.follow(u.id)
                                            .then(resultCode => {
                                                if (resultCode === 0)
                                                    props.follow(u.id)
                                                props.toggleFollowingProgress(false, u.id)
                                            })
                                    }}
                                >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>;
}

export default Users
