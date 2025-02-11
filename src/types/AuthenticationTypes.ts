export interface CreateUserRequest {
    email: string;
    password: string;
}

export type LoginRequest = CreateUserRequest;

export interface IUser {
    id: string;
    userName: string;
    email: string;
    avatar: string;
    type: string; //free or premium
}