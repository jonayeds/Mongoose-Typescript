
export interface User{
    id:string;
    password:string;
    needsPasswordChange:boolean;
    role:"admin"| "student" | "faculty";
    isDeleted:boolean;
    status:"inProgress"| "blocked"
}