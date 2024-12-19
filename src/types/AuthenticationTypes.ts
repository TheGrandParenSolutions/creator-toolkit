export interface CreateUserRequest {
    email: string;
    password: string;
}

export type LoginRequest = CreateUserRequest;

export interface IUser {
    id: string;
    username: string;
    email: string;
    avatar: string;
}