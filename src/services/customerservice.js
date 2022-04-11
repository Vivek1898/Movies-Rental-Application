import http from "./httpmodule";


const api="/customers";
export function getMovies(){
    return http.get(api);

}

