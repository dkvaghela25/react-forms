export const sendData = async ({request}) => {
  const res = await request.formData();
  const obj = Object.fromEntries(res);
  console.log(obj);
}
