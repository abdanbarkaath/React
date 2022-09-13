import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import style from './student.module.css'
import StudentTable from './StudentTable'


export default function Students() {
    const [name, setName] = useState('');
    const [find, setfind] = useState(0);
    function handleChange(e) {
        setName(e.target.value)
    }

    function getStudent() {
        setfind(find+1)
        console.log(find+"find");
    }
    return (
        <div>
            <h1>Created by Abdan</h1>
            <div className={style.inpdiv}>
                {/* name input */}
                <label className={style.label}>Enter The Name Of The Student:</label>
                <Input onChange={handleChange} value={name} className={style.input}></Input>
                {/* <Button onClick={getStudent} variant="contained" color="primary">Search</Button> */}
            </div>
                <StudentTable searched={name} find={find}></StudentTable>
        </div>
    )
}
