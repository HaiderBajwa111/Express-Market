import axios from axios;

BaseURl = "http://localhost";


const getMethod = async (url = "") => {
    try {
      const response = await axios.get(url);
  
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
  
      const json = await response;
      return json;
    } catch (e) {
      return e;
    }
  };

  async function postMethod(url = "", payLoad = {}) {
    const response = await axios.post(url, payLoad, {});
    return response;
  }

  const deleteMethod = async (url = "") => {
    try {
      const response = await axios.delete(url);
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      return response;
    } catch (e) {
      return e;
    }
  };
  
  export { BaseUrl, postMethod, getMethod, deleteMethod };
  