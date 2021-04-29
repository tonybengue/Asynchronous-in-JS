async function showUserInConsole() {
  const response = await fetch("user.json");
  const datas = await response.json();

  displayInformations(datas);
}

showUserInConsole();