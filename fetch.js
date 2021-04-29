fetch("user.json")
  .then(response => response.json())
  .then(user => {
    user.displayName = user.displayName.toUpperCase();
    return user;
  })
  .then(datas => {
    displayInformations(datas);
  })
  .catch(error => {
    console.log(error);
  });