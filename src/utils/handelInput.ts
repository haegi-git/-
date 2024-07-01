export const handelInput = (
    setItem:React.Dispatch<React.SetStateAction<string>>
    ,e:React.ChangeEvent<HTMLInputElement>) =>{
        setItem(e.target.value)
}