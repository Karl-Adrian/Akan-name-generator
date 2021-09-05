const form = document.querySelector("form");

const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // const date = document.getElementById('date').value;
  // const month = document.getElementById('month').value - 1;
  // const year = document.getElementById('year').value;

  // if (date <= 0 || date > 31 || date === '' || month <= 0 || month > 12) {
  //   alert('Invalid Input!');
  // } else {
  //   const dayOfBirth = new Date(year, month, date).getDay();

  //   if (dayOfBirth) {
  //     if (document.getElementById('female').checked) {
  //       alert(`Your name is ${femaleNames[dayOfBirth]}`);
  //     }
  //     if (document.querySelector('#male').checked) {
  //       alert(`Your name is ${maleNames[dayOfBirth]}`);
  //     }
  //   }
  // }

  const ordinal = (number) => {
    const english_ordinal_rules = new Intl.PluralRules("en", {
      type: "ordinal",
    });

    const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th",
    };

    const suffix = suffixes[english_ordinal_rules.select(number)];
    return number + suffix;
  };

  const akanName = document.querySelector("#akan__name");
  const userCentury = document.querySelector("#user__century");

  const birthdate = document.getElementById("dateOfBirth").value;
  const day = new Date(birthdate).getDay();
  const month = new Date(birthdate).getMonth();
  const year = new Date(birthdate).getFullYear().toString().slice(0, 2) - 1 + 2;
  console.log(year);
  const century = ordinal(year);

  if (day) {
    if (document.getElementById("female").checked) {
      akanName.textContent = `Your akan name is ${femaleNames[day]}.`;
      userCentury.textContent = `You belong to the ${century} century.`;
    }
    if (document.querySelector("#male").checked) {
      akanName.textContent = `Your akan name is ${maleNames[day]}.`;
      userCentury.textContent = `You belong to the ${century} century.`;
    }
  }
});
