import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0)
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
                fullName: 'Dmitry',
                followed: true,
                status: 'I am looking for a job right now...',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: 2,
                photoUrl: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss!',
                location: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            },
            {
                id: 3,
                photoUrl: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
                followed: false,
                fullName: 'Andrew',
                status: 'I want to travel',
                location: {
                    country: 'Ukraine',
                    city: 'Kiev'
                }
            }
        ])
    return <div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div><img src={u.photoUrl} className={styles.userPhoto}/></div>
                        <div>
                            {u.followed
                                ? <button
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}
                                >Unfollow</button>
                                : <button
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}
                                >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>;
}

export default Users