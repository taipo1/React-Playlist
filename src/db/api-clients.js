const API_URL = "https://wincsonglist.firebaseio.com/songData";
// request handeler

const apiFunctions = {
  //Request Handeler
  handleRequest: async (apiUrl, method, body) => {
    try {
      const response = await fetch(apiUrl, {
        method: method,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getSongs: async () => {
    let data = [];
    await apiFunctions
      .handleRequest(`${API_URL}.json`, "GET")
      .then(convertResults)
      .then((tasks) => {
        data = tasks;
      });
    return data;
  },

  postSong: async (obj) => {
    await apiFunctions.handleRequest(`${API_URL}.json`, "POST", {
      artist: obj.artist,
      title: obj.title,
      genre: obj.genre,
      rating: obj.rating,
    });
  },
  deleteTask: async (id) => {
    console.log(id);
    await apiFunctions.handleRequest(`${API_URL}/${id}.json`, "DELETE");
  },
};

// convert hasj results.
const convertResults = (result) => {
  if (result) {
    const tasks = Object.keys(result).map((key) => ({
      id: key,
      artist: result[key].artist,
      title: result[key].title,
      genre: result[key].genre,
      rating: result[key].rating,
    }));
    return tasks;
  }
};

export default apiFunctions;
