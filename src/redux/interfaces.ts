import { ItemKind } from "../interfaces/itemKind.enum";
import { Movie } from "../interfaces/movie";
import { TVShow } from "../interfaces/TvShow";

export type Action = {
    type: string;
    payload: any;
};

export type ContextState = {
    itemKind: ItemKind.Kind;
    movies: Movie[];
    tvShows: TVShow[];
};