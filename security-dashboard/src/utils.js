const CallApi = async (url, method, data) => {
  const header =
    data == null
      ? {
          method: method,
          headers: { "Content-Type": "application/json" },
        }
      : {
          method: method,
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        };

  try {
    const response = await fetch(url, header);
    return await response.json();
  } catch (error) {
    alert("There was an error, please contact your administrator.");
  }
};

// const urlBase = "http://52.14.206.240:5000";
const urlBase = "http://localhost:5000";

module.exports = {
  CallApi: CallApi,
  urlBase: urlBase,
};
