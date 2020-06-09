import apiClients from "./../db/api-clients";

const sortHighLow = (data, reverse) =>
  reverse
    ? data.sort((a, b) => parseInt(a.rating - parseInt(b.rating))).reverse()
    : data.sort((a, b) => parseInt(a.rating - parseInt(b.rating)));

const sortTitle = (data, reverse) => {
  const compare = (a, b) => {
    let comparison = 0;
    if (a.title.toUpperCase() > b.title.toUpperCase()) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  };
  !reverse ? data.sort(compare).reverse() : data.sort(compare);
};

const sortList = async (sortValue) => {
  let data = await apiClients.getSongs();
  if (sortValue === "") {
    return data;
  } else if (sortValue === "highlow" || sortValue === "lowhigh") {
    sortValue === "highlow"
      ? sortHighLow(data, true)
      : sortHighLow(data, false);
  } else if (sortValue === "a-z" || sortValue === "z-a") {
    sortValue === "a-z" ? sortTitle(data, true) : sortTitle(data, false);
  } else {
    const filteredArray = data.filter((song) => song.genre === sortValue);
    data = filteredArray;
  }
  return data;
};

export default sortList;
