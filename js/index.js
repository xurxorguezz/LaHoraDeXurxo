setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hours.innerHTML = h + "</br><span>Horas</span>";
  minutes.innerHTML = m + "</br><span>Minutos</span>";
  seconds.innerHTML = s + "</br><span>Segundos</span>";
  ampm.innerHTML = ap;

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
});
