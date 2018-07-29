export interface User {

   id: number;
   userName: string;
   firstName: string;
   lastName: string;
   token: string;
}

export interface UserRequest {
    userName: string;
    password: string;
}
