function avatarFlip() {
  let degrees = 0;
  setInterval(flip, 5000);

  function flip() {
    let avatar = document.getElementById("avatar");
    avatar.style.transform = `rotateY(${degrees}deg)`;
    if (degrees === 0) {
      degrees = 360;
    } else {
      degrees = 0;
    }

    // if (degrees === 180) {
    //   degrees = -180;
    // } else {
    //   degrees = 180;
    // }
  }
}

avatarFlip();
