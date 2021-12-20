import http from './httpmodule'

export function getGenres() {
  return http.get("/genres");
  }
  