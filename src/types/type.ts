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
}

export type MemberPropsType={
    member:memberType,
    updateMember:(member:memberType)=>void
}