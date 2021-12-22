import http from "./httpmodule";


const api="/users";
export function register(user){
    return http.post(api,{
        email:user.username,
        password:user.password,
        name:user.name
    });

}