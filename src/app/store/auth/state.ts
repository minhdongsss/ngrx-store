export interface AuthState {
    email: string;
    token: string;
    refreshToken: string;
    error: string;
}
 
 export const initialState: AuthState = {
    email: '',
    token: '',
    refreshToken: '',
    error: ''
 };