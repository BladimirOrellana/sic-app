import tandaApi from "./../../../api/tanda";

export const requestCreateTanda = async (data) => {
  return await tandaApi
    .create(data)
    .then((User) => User)
    .catch((error) => error);
};

export const requestGetTandaCreatedby = async (data) => {
  return await tandaApi
    .findCreatedBY(data.data)
    .then((result) => {
      return result;
    })
    .catch((error) => error);
};
