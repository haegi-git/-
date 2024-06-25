import { useState } from "react"
import Add from "./Add"

const Header = (addMember:()=>{})=>{

    const [add,setAdd] = useState<Boolean>(false)

    const memberAdd = () =>{
        setAdd(!add)
        console.log(add)
    }
    return(
        <div>
            <header>모임원 관리</header>
            <button onClick={memberAdd}>모임원 추가</button>

            {add === true ? <Add addMember={addMember}/> : <span>ㄴㄴ</span>}
        </div>
    )
}

export default Header