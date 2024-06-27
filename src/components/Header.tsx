import { useState } from "react"
import Add from "./Add"

type HeaderPropsType={
    addMember: (member:string,e:React.FormEvent)=>void
}

export default function Header ({addMember}:HeaderPropsType) {

    const [add,setAdd] = useState<Boolean>(false)

    const toggleAdd = () =>{
        setAdd(!add)
    }
    return(
        <div>
            <header>모임원 관리</header>
            <button onClick={toggleAdd}>모임원 추가</button>

            {add === true ? <Add toggleAdd={toggleAdd} addMember={addMember}/> : null}
        </div>
    )
}