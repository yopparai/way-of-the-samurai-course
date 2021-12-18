import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (
    {
        users,
        pageSize,
        follow,
        followingInProgress,
        totalUsersCount,
        unfollow,
        currentPage,
        onPageChanged
    }
) => <div>
    <Paginator
        onPageChanged={onPageChanged}
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
    />
    <div>
        {
            users.map(u =>
                <User
                    user={u}
                    follow={follow}
                    followingInProgress={followingInProgress}
                    unfollow={unfollow}
                />
            )
        }
    </div>
</div>

export default Users
