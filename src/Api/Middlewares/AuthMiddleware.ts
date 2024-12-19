import { validateSession } from "@src/Api/Modules/Authentication/AuthenticationService";

export const authMiddleware = async (next: () => void, onFail: () => void) => {
    try {
        const isAuthenticated = await validateSession();
        if (isAuthenticated) {
            // Proceed to the next step if session is valid
            next();
        } else {
            // Handle invalid session
            onFail();
        }
    } catch {
        onFail();
    }
};
