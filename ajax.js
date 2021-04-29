const xhr = new XMLHttpRequest();
console.log(user)

xhr.onreadystatechange = () => {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const datas = JSON.parse(xhr.responseText);

    displayInformations(datas);
  }
};
xhr.open("GET", "user.json", true);
xhr.send();