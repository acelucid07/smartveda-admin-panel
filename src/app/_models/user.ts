export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}

export interface UserGetRequestParams {
    id: string;
    _id: string;
    email: string;
    role: string;
    status: boolean;
    phone: number;
    createdAt: string;
    token: string;
    updatedAt: string;
    message: string;
}
