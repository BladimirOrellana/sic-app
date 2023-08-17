import tandaApi from "./../../../api/tanda";

export const getTandaByUserRequest = async (payload) => {
  console.log("data from handler create ", payload);
  return await tandaApi
    .findCreatedBY(payload)
    .then((result) => {
      return result;
    })
    .catch((error) => error);
};
