import { get, post } from "@src/Api/Core/HttpClient";
import {
  CreateUserRequest,
  IUser,
  LoginRequest,
} from "@src/types/AuthenticationTypes";

export const createUser = async (
  request: CreateUserRequest,
): Promise<IUser | null> => {
  try {
    const response = await post(
      "auth/signup",
      { ...request },
      { withCredentials: true },
    );
    if (response?.data?.user) return response.data.user;
    return null;
  } catch {
    return null;
  }
};

export const login = async (request: LoginRequest): Promise<IUser | null> => {
  try {
    const response = await post(
      "auth/login",
      { ...request },
      { withCredentials: true },
    );
    if (response?.data?.user) return response.data.user;
    return null;
  } catch {
    return null;
  }
};

export const validatePassword = async (password: string) => {
  try {
    const response = await post(
      "auth/validate-password",
      { password },
      { withCredentials: true },
    );
    return response.data;
  } catch {
    return null;
  }
};

export const logout = async (): Promise<boolean> => {
  try {
    const response = await post("auth/logout", {}, { withCredentials: true });
    if (response?.data?.message) return true;
    return false;
  } catch {
    return false;
  }
};

export const refreshToken = async (): Promise<IUser | null> => {
  try {
    const response = await post(
      "auth/refresh-token",
      {},
      { withCredentials: true },
    );
    if (response.data.user) {
      return response.data.user;
    }
    return null;
  } catch {
    return null;
  }
};

export const validateSession = async (): Promise<IUser | null> => {
  try {
    const response = await get(
      "auth/validate-session",
      {},
      { withCredentials: true },
    );
    if (response?.data?.isValid) {
      return response.data.user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const sendForgotPasswordRequest = async (email: string) => {
  try {
    const response = await post("/auth/forgot-password", { email }, {}, true);
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    throw new Error("An error occurred." + error);
  }
};

export const resetPassword = async (
  accessToken: string,
  newPassword: string,
  refreshToken: string,
) => {
  try {
    const response = await post("/auth/reset-password", {
      accessToken,
      newPassword,
      refreshToken,
    });
    return response.message;
  } catch (error) {
    throw new Error("An error occurred." + error);
  }
};
