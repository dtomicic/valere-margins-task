import { IMovie } from "../types/MovieTypes";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export async function fetchMovies(url: string) {
  try {
    const response = await fetch(url, options);
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function fetchPaginatedData(url: string, maxPage: number) {
  try {
    const allData: IMovie[] = [];

    for (let currentPage = 1; currentPage <= maxPage; currentPage++) {
      const response = await fetch(
        `${url}&page=${currentPage}&api_key=${process.env.REACT_APP_API_KEY}`,
        options
      );
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        allData.push(...data.results);
      } else {
        break;
      }
    }

    return allData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
