export interface User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}

export interface UserGetRequestParams {
    id: string;
    name: string;
    email: string;
    role: string;
    status: boolean;
    createdAt: string;
    token: string;
    updatedAt: string;
}