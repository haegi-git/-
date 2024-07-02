export type memberType = {
    name:string,
    late:number,
    inactivity:number,
    warning:number,
    warningCause:string[]
}

export type MemberBoxPropsType = {
    memberOption:string,
    count:number,
    countUp:(option:string)=>void,
    countDown:(option:string)=>void
    toggleCause?:()=>void
}

export type MemberPropsType={
    member:memberType,
    updateMember:(member:memberType)=>void,
    deleteButton:(deleteMember:string)=>void
}

export type AddPropsType = {
    addMember: (member:string,e:React.FormEvent)=>void,
    toggleAdd:()=>void,
    add:boolean
}

export type CausePropsType = {
    MemberName:string,
    toggleCause:()=>void,
    member:memberType,
    causeAdd:(newcause:string,e:React.FormEvent)=>void
}

export type DeletePropsType = {
    deleteButton:(deleteMember:string)=>void,
    memberName:string,
    toggleDelete:()=>void
}