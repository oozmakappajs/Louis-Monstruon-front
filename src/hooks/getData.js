// eslint-disable-next-line consistent-return
async function getData(API) {
  try {
    const dataRequest = await fetch(`http://oozmakappa-api.herokuapp.com/${API}`);
    const response = await dataRequest.json();
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default getData;
