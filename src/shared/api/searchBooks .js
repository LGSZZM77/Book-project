const searchBooks = async (query) => {
  const TTBKEY = import.meta.env.VITE_ALADIN_TTB_KEY;
  const url = `/api/ItemSearch.aspx?ttbkey=${TTBKEY}&Query=${encodeURIComponent(
    query,
  )}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;

  try {
    const res = await fetch(url);
    const text = await res.text();

    const data = JSON.parse(text);
    return data.item.map((book) => book.title);
  } catch (e) {
    console.error("검색 실패", e);
    return [];
  }
};

export default searchBooks;
