export interface User {
    id: string;
    username?:string;
    sex?:string;
    birth?:string | Date;
    phone?:number;
    email?:string;
    type?:string;
    district?:string;
    city?:string;
}