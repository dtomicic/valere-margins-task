export async function fetchPopularMovies(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.API_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const jsonData = await response.json();
  return jsonData;
}
