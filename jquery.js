$.ajax({
  url: "user.json",
  success: (datas) => {
    displayInformations(datas);
  }
});