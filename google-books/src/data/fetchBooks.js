export const fetchBooks = async (searchTerm, index = "0") => {
  console.log(searchTerm);
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${index}&maxResults=40`
    );
    const data = await response.json();
    const results = { totalResults: data.totalItems };
    console.log(data);
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
    console.log({ results, dataToRender });
    return { results, dataToRender };
  } catch (e) {
    return e.message;
  }
};
