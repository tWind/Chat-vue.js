class API{
  async get(url) {
    let response = await fetch(url);

    return await response.json();
  }
}

export default new API();