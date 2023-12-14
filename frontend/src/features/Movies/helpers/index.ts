import { Movie } from "api/interfaces/movie";

export const getType = (type: string): string => {
  if (type === "1") return "Film";
  if (type === "2") return "TV Series";
  return "Cartoon";
};

export const compByTitle = (a: Movie, b: Movie) => {
  if (a.title < b.title) {
    return -1;
  } else if (a.title === b.title) {
    return 0;
  }
  return 1;
};
export const compByType = (a: Movie, b: Movie) => {
  if (getType(a.type) < getType(b.type)) {
    return -1;
  } else if (getType(a.type) === getType(b.type)) {
    return 0;
  }
  return 1;
};
export const compByYear = (a: Movie, b: Movie) => {
  if (a.year < b.year) {
    return -1;
  } else if (a.year === b.year) {
    return 0;
  }
  return 1;
};

export const compByRating = (a: Movie, b: Movie) => {
  if (a.rating < b.rating) {
    return -1;
  } else if (a.rating === b.rating) {
    return 0;
  }
  return 1;
};

export const compByScore = (a: Movie, b: Movie) => {
  if (a.score < b.score) {
    return -1;
  } else if (a.score === b.score) {
    return 0;
  }
  return 1;
};

export const compByCountry = (a: Movie, b: Movie) => {
  if (a.country < b.country) {
    return -1;
  } else if (a.country === b.country) {
    return 0;
  }
  return 1;
};
