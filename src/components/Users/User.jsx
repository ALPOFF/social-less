import React from 'react';
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import Paginator from "../common/Paginator/Paginator";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img
                                src={user.photos.small != null ? user.photos.small : "http://bootstraptema.ru/snippets/icons/2016/mia/3.png"}
                                alt="" height={50}/>
                            </NavLink>
                     </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow</button>
                            : <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>
                                Follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
        </div>)
}

export default User;
