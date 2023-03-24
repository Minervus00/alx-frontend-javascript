import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const obj = {};

  try {
    obj.photo = await uploadPhoto();
    obj.user = await createUser();
  } catch (error) {
    obj.photo = null;
    obj.user = null;
  }
  return obj;
}
