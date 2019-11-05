export interface Ilogin {
     email?:    string
     password?: string
}

export interface Iregister extends Ilogin {
    first_name?: string,
    last_name?:  string,
}