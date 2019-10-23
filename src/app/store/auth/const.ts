export class Credentials {
    userName: string;
    passWord: string;
}

const AUTH_ACTION = {
    LOGIN: '[Login Page] Login',
    LOGIN_SUCCESS: '[Login Page] Success',
    LOGIN_FAIL: '[Login Page] Fail',
}

export default {
    AUTH_ACTION,
}