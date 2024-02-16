import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../Redux/services/apiServices';


const EditName = ({onEdit}) => {
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const userName = useSelector((state) => state.user.userName);
    const [edit, showEdit] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.login.token);
    const [newUserName, setNewUserName] = useState('');


const submit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(newUserName, token)); // Utilisez directement updateProfile ici
        setNewUserName('');
        showEdit(false);
        onEdit(false);
    };
    useEffect(() => {
        setNewUserName(userName);
    }, [userName]);

    return (
        <div className="header">
            <h1>{edit ? 'Edit user info' : <>Welcome back <br /> {firstName} {lastName}</>}</h1>
            {
                edit ?
                    <form className='edit-inputs-buttons' onSubmit={submit}>
                        <div className='edit-inputs'>
                            <div className='input-group'>
                                <label>
                                    User name :
                                    <input
                                        className='edit-input'
                                        onChange={(e) => { setNewUserName(e.target.value) }}
                                        placeholder={newUserName}
                                        required
                                    />
                                </label>
                            </div>
                            <div className='input-group'>
                                <label>
                                    First name :
                                    <input type="text" className='edit-input' placeholder={firstName} disabled />
                                </label>
                            </div>
                            <div className='input-group'>
                                <label>
                                    Last name :
                                    <input type="text" className='edit-input' placeholder={lastName} disabled />
                                </label>
                            </div>
                        </div>
                        <div className='edit-buttons'>
                            <button className='edit-button-option' type='submit'>Save</button>
                            <button className='edit-button-option' onClick={() => { showEdit(false) }}>Cancel</button>
                        </div>
                    </form>

                    :
                   <button className="edit-button" onClick={() => { showEdit(true); onEdit(true); }}>Edit Name</button>
            }
        </div>
    )
}


export default EditName;