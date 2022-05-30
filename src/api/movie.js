import instance from "./index";

export async function searchMovie(text,page){
    return await instance.get(`/search/movie?api_key=${process.env.VUE_APP_API_KEY }&language=en-US&query=${text}&page=${page}&include_adult=false`)
}