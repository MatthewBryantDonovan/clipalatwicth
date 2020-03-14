import React, { useState } from 'react';

function UserSearchForm(props) {

    const [name, setName] = useState();

    function updateName(e) {
        const newVal = e.target.value;
        setName(newVal)
    }
    
    return(<div>
        <h1>I am the UserSearchForm</h1>
        <form action="submit" onSubmit={(e) => {e.preventDefault(); props.submit( props.formType, name)}}>
        <h1>{props.formType} Search!</h1>
            <label htmlFor="name">{props.formType} Name</label>
            <input type="text" id="name" onChange={updateName} required  />
            <button type="submit" className="btn" >Search</button>
        </form>
    </div>)}

export default UserSearchForm