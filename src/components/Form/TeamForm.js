import React, { useState } from 'react';


const TeamForm = props => {
    console.log(`From Team Form: ${props}`);

    const [ member, setMember ] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChange = e => {
        setMember({...member, [e.target.name]: e.target.value});
    }

    const formSubmit = e => {
        e.preventDefault();
        props.addMember(member);
        setMember({name: '', email: '', role: ''})
    }

    return (
            <form onSubmit = {formSubmit}>
                <div>
                    <label htmlFor='name'>What would you like to be called?</label>
                    <br></br>
                    <input
                        id = 'name'
                        placeholder = 'Name'
                        type = 'text'
                        name = 'name'
                        value = {member.name}
                        onChange = {handleChange}
                    />
                </div>
                <div>
                    <label htmlFor = 'email'>Enter an email we can reach you.</label>
                    <br></br>
                    <input 
                        id = 'email'
                        placeholder = 'MyEmail@email.com'
                        type = 'text'
                        name = 'email'
                        value = {member.email}
                        onChange = {handleChange}
                    />
                </div>
                <div>
                    <label htmlFor = 'role'>What is your role?</label>
                    <br></br>
                    <input 
                        id = 'role'
                        placeholder = 'Role'
                        type = 'text'
                        name = 'role'
                        value = {member.role}
                        onChange = {handleChange}
                    />
                </div>
                <div>
                    <button type = 'submit'>Join</button>
                </div>
            </form>
    )
}

export default TeamForm;