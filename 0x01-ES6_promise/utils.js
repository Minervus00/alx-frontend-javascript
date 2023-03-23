export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}


export function createUser() {
  // return Promise.reject();
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
