const api = axios.create({
  baseURL: "https://api.pexels.com/v1/",
  headers: {
    Authorization:
      "563492ad6f917000010000014604ac37afce408fa48bddeed0aae902563492ad6f917000010000014604ac37afce408fa48bddeed0aae902",
  },
});
export default api;
