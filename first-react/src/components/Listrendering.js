import React from 'react'
import Listchild from './Listchild';

function Listrendering() {
    const names=[{name:"abdan",age:20},{name:"basil",age:22},{name:"turab",age:22}]
    //second method
    var nameList = names.map((person,index)=><Listchild key={index} peep = {person}></Listchild>);
    return <div>{nameList}</div>
    //first method
    // return (
    //     <div>
    //         {
    //             names.map(name=><div>{name}</div>)
    //         }
    //     </div>
    // )
}
export default Listrendering
