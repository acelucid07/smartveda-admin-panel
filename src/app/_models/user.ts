export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}

export interface UserGetRequestParams {
    data: {
        id: string;
        email: string;
        role: string;
        status: boolean;
        createdAt: string;
        token: string;
        updatedAt: string;
    };
    message: string;
}