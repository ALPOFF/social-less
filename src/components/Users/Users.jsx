import React from 'react';
import styles from "./Users.module.css";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p =>
                    <span className={props.currentPage === p && styles.selectedPage}
                          onClick={(e) => {
                              props.onPageChanged(p)
                          }}>{p}</span>)}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img
                            src={u.photos.small != null ? u.photos.small : "http://bootstraptema.ru/snippets/icons/2016/mia/3.png"}
                            alt="" height={50}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>

    )
}

export default Users;
