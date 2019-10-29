import React from 'react';
import Paginator from "./Paginator";
import User from "./User";


let Users = (props) => {

    return (<div>
            <Paginator currentPage={props.currentPage}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}/>
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingProgress={props.followingProgress}
                                           unfollowThunkCreator={props.unfollowThunkCreator}
                                           followThunkCreator={props.followThunkCreator}/>)

            }
        </div>
    );

};

export default Users;