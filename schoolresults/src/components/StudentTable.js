import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './table.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons'


export default function StudentTable(props) {
    const [storestudents, setStoreStudents] = useState([])
    const [students, setStudents] = useState([])
    useEffect(() => {
        if (props.find == 0) {
            axios.get("http://localhost:3000/students")
                .then(response => {
                    let temp = [];
                    response.data.forEach(val => {
                        temp.push(val)
                        setStoreStudents([...temp])
                    })
                })
        }
        console.log(storestudents.length);
    }, [props.find])

    useEffect(() => {
        if (props.searched === '') {
            setStudents([])
        } else {
            const tempstore = storestudents.filter(stud => {
                if (props.searched.toLowerCase().split(' ').every(s => stud.name.toLowerCase().includes(s))) {
                    return props.searched.toLowerCase().split(' ').every(s => stud.name.toLowerCase().includes(s))
                } else {
                    return props.searched.split('').every(s => stud.rollno.includes(s))
                }
            })
            setStudents([...tempstore])
            console.log(tempstore);
        }
        // console.log(storestudents);
    }, [props.searched])


    let x;
    let y;
    if (students.length > 0) {
        x = <table className={style.table}>
            <tr>
                <th className={style.name}>
                    <p>Name</p>
                </th>
                <th className={style.ts}>
                    <p>Rollno</p>
                </th>
                <th className={style.ts}>
                    <p>School</p>
                </th>
                <th className={style.ts}>
                    <p>City</p>
                </th>
                <th className={style.ts}>
                    <p>English</p>
                </th>
                <th className={style.ts}>
                    <p>Hindi</p>
                </th>
                <th className={style.ts}>
                    <p>H&G</p>
                </th>
                <th className={style.ts}>
                    <p>Math</p>
                </th>
                <th className={style.ts}>
                    <p>Science</p>
                </th>
                <th className={style.ts}>
                    <p>Cta</p>
                </th>
                <th className={style.ts}>
                    <p>Percentage %</p>
                </th>

            </tr>
            {
                students.map((stud, index) => (
                    <tr>
                        <td className={style.name} key={index}><span>{stud.name}</span></td>
                        <td className={style.ts} ><span>{stud.rollno}</span></td>
                        <td className={style.ts} ><span>{stud.school}</span></td>
                        <td className={style.ts} ><span>{stud.city}</span></td>
                        <td className={style.ts} ><span>{stud.Eng}</span></td>
                        <td className={style.ts} ><span>{stud.Hin}</span></td>
                        <td className={style.ts} ><span>{stud.Hcg}</span></td>
                        <td className={style.ts} ><span>{stud.Mat}</span></td>
                        <td className={style.ts} ><span>{stud.Sci}</span></td>
                        <td className={style.ts} ><span>{stud.Cta}</span></td>
                        <td className={style.ts} ><span>{stud.Percentage}</span></td>
                    </tr>
                ))
            }
        </table>

    } else {
        y = <div className={style.h1}><h1>Nothing to see here<FontAwesomeIcon icon={faUserGraduate} /></h1></div>
    }

    return (
        <div>
            {x}
            {y}
        </div>
    )
}
