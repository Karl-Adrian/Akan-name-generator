const checkAkan = (e) => {
    e.preventDefault();
    const fNames = ["Akosua", "Adowa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const mNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    const frm = document.querySelector("#frmAkans");
    const fd = new FormData(frm)
    const gender = fd.get("gender");
    const dob = fd.get("dob");

    console.log(fNames[0])
    
}
document.querySelector("#frmAkans"). addEventListener('submit', checkAkan);