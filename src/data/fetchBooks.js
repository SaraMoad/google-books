export const fetchBooks = async (searchTerm, index = "0") => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${index}&maxResults=40`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books from api");
  }
  const data = await response.json();
  const results = { totalResults: data.totalItems };

  if (Number(data.totalItems) === 0) {
    throw new Error(`Sorry, There were no results matching: ${searchTerm}`);
  }

  const dataToRender = await data.items.map((dataInfo) => {
    return {
      id: dataInfo.id,
      authors: dataInfo.volumeInfo.authors,
      description: dataInfo.volumeInfo.description,
      publisher: dataInfo.volumeInfo.publisher,
      publishedDate: dataInfo.volumeInfo.publishedDate,
      title: dataInfo.volumeInfo.title,
      image: dataInfo.volumeInfo.imageLinks,
      language: dataInfo.volumeInfo.language,
    };
  });

  return { results, dataToRender };
};
