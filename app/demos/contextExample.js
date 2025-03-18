"use client";

import React, { useContext } from 'react';
import { UserContext } from './userContext';

const ContextExample = ({children}) => {
    return <UserContext value={{
        name: "Jane Doe",
        age: 30,
        email: "jane@sait.ca"
        }}
    >
        {children}
    </UserContext>;
}

const ChildComponent = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Context Example</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default ContextExample;
export { ChildComponent };