import tandaApi from "./../../../api/tanda";

export const requestCreateTanda = async (data) => {
  console.log("create tanda api call ", data);
  return await tandaApi
    .create(data)
    .then((User) => User)
    .catch((error) => error);
};

export const requestGetTandaCreatedby = async (data) => {
  console.log("get  tanda  created by api call ", data);
  return await tandaApi
    .findCreatedBY(data.data)
    .then((result) => {
      console.log("get  tanda  created by api result ", result);
      return result;
    })
    .catch((error) => error);
};
