export async function fetchMovies(
  url: string,
) {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const response = await fetch(url, options);
    const jsonData = await response.json();
    
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
