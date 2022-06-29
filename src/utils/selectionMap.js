//simple arranging function
const selectionMap = function ({ series, films }) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter(
          (item) => item.genre === "Documentaries".toLowerCase()
        ),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "Comedies".toLowerCase()),
      },
      {
        title: "Children",
        data: series.filter((item) => item.genre === "Children".toLowerCase()),
      },
      {
        title: "Crime",
        data: series.filter((item) => item.genre === "Crime".toLowerCase()),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "Drama".toLowerCase()),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "Thriller".toLowerCase()),
      },
      {
        title: "Children",
        data: films.filter((item) => item.genre === "Children".toLowerCase()),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "Suspense".toLowerCase()),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "Romance".toLowerCase()),
      },
    ],
  };
};

export default selectionMap;
