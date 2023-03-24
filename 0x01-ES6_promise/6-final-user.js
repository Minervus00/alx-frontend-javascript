import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const arr = Promise.allSettled([user, photo])
    .then((values) => {
      const arr = [];
      for (const item of values) {
        arr.push({ status: item.status, value: item.value || item.reason });
      }
      return arr;
    });
  return arr;
}
