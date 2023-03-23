import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const prom1 = uploadPhoto();
  const prom2 = createUser();
  Promise.all([prom1, prom2])
    .then((values) => {
      console.log(values[0].body, ...Object.values(values[1]));
    })
    .catch(() => console.log('Signup system offline'));
}
