import styles from "./Paginator.module.css";

const Paginator = ({onPageChanged, currentPage, totalUsersCount, pageSize}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(page => {
                return <span
                    className={currentPage === page && styles.selectedPage}
                    onClick={() => onPageChanged(page)}
                >{page}</span>;
            }
        )}
    </div>
}
export default Paginator;
