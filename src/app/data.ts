import { User } from "./user";

export interface DataServer {
    success: boolean;
    message: string;
    data: User[]
}