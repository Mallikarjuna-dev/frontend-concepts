import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/users/usersSlice';

const Users = () => {
    const { loading, data, error } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1>Users</h1>
            {data.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default Users;