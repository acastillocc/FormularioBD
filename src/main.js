// import {writeUserData} from "../index.html"

const firebaseConfig = {
  apiKey: "AIzaSyBBHTqZL6-Z8_hslC-Dy3D8mO9p_3OMnF8",
  authDomain: "basededatos-884be.firebaseapp.com",
  databaseURL: "https://basededatos-884be-default-rtdb.firebaseio.com",
  projectId: "basededatos-884be",
  storageBucket: "basededatos-884be.appspot.com",
  messagingSenderId: "626069235468",
  appId: "1:626069235468:web:e13691134aef42bacd0b29",
  measurementId: "G-ZKEBTS1VSG",
};

function Registro() {
  const userV = {
    email: document.getElementById("inputEmail4").value,
    password: document.getElementById("inputPassword4").value,
    confirmPassword: document.getElementById("inputPassword4_1").value,
    address: document.getElementById("inputAddress").value,
    // address2: document.getElementById('inputAddress2').value,
    city: document.getElementById("inputCity").value,
    state: document.getElementById("inputState").value,
    zip: document.getElementById("inputZip").value,
    img: document.getElementById("formFile"),
  };


  if (
    userV.email.length == 0 ||
    userV.password.length == 0 ||
    userV.confirmPassword.length == 0 ||
    userV.address.length == 0 ||
    userV.city.length == 0 ||
    userV.state.length == 0 ||
    userV.zip.length == 0
  ) {
    console.log("Llene todos los campos");
  } else {
    if (userV.password === userV.confirmPassword) {
      validateFile(userV.img);
      validation(userV.email, userV.password);
    //   if (!validateFile(userV.img) && validation(userV.email, userV.password)){
    //   }
    } else {
      alert("Su contraseña no es igual");
    }
  }
}

function validation(email, password) {
    var error = false;
  //email
  var expEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido = expEmail.test(email);
  if (esValido == true) {
    console.log("El correo es valido");
  } else {
    alert("El correo no es valido");
    error = true;
  }
  //password
  var expPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
  var esvalidoP = expPass.test(password);
  if (esvalidoP == true) {
    console.log("Contraseña correcta");
    
  } else {
    alert("Tu contraseña no es segura");
    error = true;
  }
  return error;
}

function validateFile(img) {
  var allowedExtension = ["jpeg", "jpg", "png", "gif"];
  var fileExtension = img.value.split(".").pop().toLowerCase();
  var isValidFile = false;

  for (var index in allowedExtension) {
    if (fileExtension === allowedExtension[index]) {
      isValidFile = true;
      break;
    }
  }

  if (!isValidFile) {
    alert("La imagen debe ser : *." + allowedExtension.join(", *."));
  }

  return isValidFile;
}

    
// function writeUserData(userId, email, password, address, city, state, zip) {
//   const db = getDatabase();
//   set(ref(db, "users/" + userId), {
//     email: email, 
//     password: password,
//     address: address,
//     city: city,
//     state: state,
//     zip: zip
//   });
// }

// function Registro1(){
    
//     writeUserData(1, "juan@gmail.com", "Juan1234!", "Carrera 1", "Cali", "Valle", "1234" );
// }
