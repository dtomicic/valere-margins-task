export interface IMovie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    genre_ids: number[];
    status_code?: number;
}