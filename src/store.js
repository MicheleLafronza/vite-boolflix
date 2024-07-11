// file di store management
import { reactive } from "vue";

export const store = reactive ({
    UrlAPiMovie: 'https://api.themoviedb.org/3/search/movie?api_key=27a5d280f7195c739530e6b0115a41de',
    movies: [],
    series: [],
    searchText: '',
    movieVisible: false,
});