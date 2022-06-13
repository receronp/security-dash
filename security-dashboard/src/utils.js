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
    alert("Hubo un error favor de contactar al admnistrador.");
  }
};

module.exports = {
  CallApi: CallApi,
};
