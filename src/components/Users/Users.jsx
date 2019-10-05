import React from "react";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'http://bootstraptema.ru/snippets/icons/2016/mia/3.png',
            followed: false,
            fullName: 'Kirill',
            status: 'Go go go',
            location: {city: 'Moscow', country: 'Russia'}
        },
            {
                id: 2,
                photoUrl: 'http://propsyteen.ru/wp-content/themes/siteseed/css/boy0.png',
                followed: true,
                fullName: 'Ivan',
                status: 'Hello World',
                location: {city: 'Spb', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png',
                followed: false,
                fullName: 'Svetlana',
                status: 'Sunshine',
                location: {city: 'Minsk', country: 'Belarus'}
            }])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="" height={50}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
