import { ACCESS_KEY, BASE_URL } from "./constants";

interface Response {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const getPhotosByQuery = async (
  query: string,
  page: number,
  perPage: number
): Promise<Response | null> => {
  const END_POINT: string = "/search/photos";
  const URL: string = `${BASE_URL}${END_POINT}?query=${query}&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return null;
  }
};
