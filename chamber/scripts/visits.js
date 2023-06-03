var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");
visitCount = 1;

localStorage.setItem("page_view", 1);
visitCount = Number(visitCount) + 1;

localStorage.setItem("page_view", visitCount);
counterContainer.innerHTML = visitCount;