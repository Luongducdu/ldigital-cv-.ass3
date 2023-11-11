function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("check value email", emailValue);
  const check = emailValue.match(regex);
  console.log("email", check);
  const sectionContent = document.querySelector("#personal-info .mt-info");
  console.log("chek section", sectionContent);
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "vui long nhap dung email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const jobcontenttElement = element.closest(".job-content");
  const viewMore = jobcontenttElement.querySelector(".view-more");
  if (viewMore.innerHTML == "view more") {
    const sectionContent = jobcontenttElement.querySelectorAll(".job-title");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.innerHTML = "Less More";
  } else {
    const sectionContent = jobcontenttElement.querySelectorAll(".job-title");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.innerHTML = "View More";
  }
}
