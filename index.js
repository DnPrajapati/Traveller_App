function posterChange(location) {
  //   debugger;
  //   console.log("ITs working!!");
  //   console.log(location);
  const posterObj = {
    Home: {
      image: "images/home.jpg",
      title1: "Welcome",
      detail1: "This is Best Website For Tourist",
      detail2: [
        "Saputara",
        "Statue Of Unity",
        "Gir",
        "Ranki Vav",
        "Riverfront",
      ],
    },
    Saputara: {
      image: "images/saputara.jpg",
      title1: "Hill Station",
      detail1: "Located in Dang",
      detail2: [
        "Valley view",
        "Nageshwar Temple",
        "Saputara Lake",
        "Sunset Point",
      ],
    },
    StatueofUnity: {
      image: "images/SOU.jpg",
      title1: "Tallest Statue",
      detail1: "Located in Kevadiya colony",
      detail2: [
        "Exhibition Hall/Museum",
        "Laser light & Sound show",
        "Valley of Flower",
        "Sardar Sarovar Dam",
        "Shoolpaneshwar Sanctuary & Temple",
      ],
    },
    Gir: {
      image: "images/gir.jpg",
      title1: "Jungle",
      detail1: "Located in Junagadh",
      detail2: ["Gir National Park","Jungle Safari", "Uparkot Fort", "Mahabat Maqbara", "Somnath Temple"],
    },
    RankiVav: {
      image: "images/rankivav.jpg",
      title1: "Historical Place",
      detail1: "Located in Patan",
      detail2: ["Stepwell","Patan Patola Museum", "Panchsara Temple", "Modhera Sun Temple"],
    },
    Riverfront: {
      image: "images/riverfront.jpg",
      title1: "River View",
      detail1: "Located in Ahmedabad",
      detail2: ["River Promenade","Park","Atal Bridge","Biodiversity Park"],
    },
  };
  const bgImage = document.querySelector("#posterBG");
  const image = document.querySelector("#poster");
  const box1 = document.querySelector(".box1");
  const box2 = document.querySelector(".box2");

  bgImage.src = posterObj[location].image;
  image.src = posterObj[location].image;
  box1.querySelector("h2").innerHTML = posterObj[location].title1;
  box1.querySelector("p").innerHTML = posterObj[location].detail1;
  const arrayToList = (x) => {
    text = "";
    for (const i of x) {
      text += `<li>${i}</li>`;
    }
    return text;
  };
  box2.querySelector("ul").innerHTML = arrayToList(posterObj[location].detail2);
}

posterChange("Home");
