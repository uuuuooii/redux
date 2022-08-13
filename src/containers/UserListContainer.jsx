import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import UserList from "../components/UserList"
import { getUsersPromise, getUsersThunk } from "../redux/actions";


export default function UserListContainer() {
    const users = useSelector(state=> state.users.data);
    const dispatch = useDispatch();

// const getUsers = useCallback(
    //     async()=> {
    //     try {
    //         dispatch(getUsersStart());
    //         const res = await axios.get('https://api.github.com/users');
    //         dispatch(getUsersSucces(res.data));
    //     }   catch(error){
    //         dispatch(getUsersSucces(error));
    //     }
    // },[dispatch])

    const getUsers = useCallback(()=> {
        dispatch(getUsersThunk())  
    },[dispatch])
   
    return <UserList users={users} getUsers={getUsers}/>
}