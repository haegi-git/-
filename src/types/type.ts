export type memberType = {
    name:string,
    late:number,
    inactivity:number,
    warning:number,
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
    updateMember:(member:memberType)=>void
}

export type AddPropsType = {
    addMember: (member:string,e:React.FormEvent)=>void,
    toggleAdd:()=>void
}
