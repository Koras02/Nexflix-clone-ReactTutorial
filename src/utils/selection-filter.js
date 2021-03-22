// 장르 Map 구현
export default function selectionMap({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genere === "documentaries"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genere === "Comidies"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genere === "children"),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genere === "crime"),
      },
      {
        title: "Fell Good",
        data: series.filter((item) => item.genere === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: series.filter((item) => item.genere === "drama"),
      },
      {
        title: "Thriller",
        data: series.filter((item) => item.genere === "thriler"),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genere === "children"),
      },
      {
        title: "Suspense",
        data: series.filter((item) => item.genere === "suspense"),
      },
      {
        title: "Romance",
        data: series.filter((item) => item.genere === "romance"),
      },
    ],
  };
}
