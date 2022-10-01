function posterChange(location) {
//   debugger;
//   console.log("ITs working!!");
//   console.log(location);
  let posterObj = {
    Home: "images/home.jpg",
    Saputara: "images/saputara.jpg",
    StatueofUnity: "images/SOU.jpg",
    Gir: "images/gir.jpg",
    RankiVav: "images/rankivav.jpg",
    Riverfront: "images/riverfront.jpg",
  };

  document.getElementById("posterBG").src = posterObj[location];
  document.getElementById("poster").src = posterObj[location];
}
