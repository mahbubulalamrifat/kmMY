// accordion icon change
// $(".accordion").click(function () {
// 	$(this).find("i").toggleClass("fa-angle-down fa-angle-up");
// });

// active
const currentLocation = location.href;
const menuItem = document.querySelectorAll("ul li a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "active";
	}
}

// counter
const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
	const updateCount = () => {
		const target = +counter.getAttribute("value");
		const count = +counter.innerText;
		const inc = Math.ceil(target / speed);

		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

const counterss = document.querySelectorAll(".count");
const speedd = 200;

counterss.forEach((countt) => {
	const updateCount = () => {
		const target = parseInt(+countt.getAttribute("value"));
		const count = parseInt(+countt.innerText);
		const increment = 1;

		if (count < target) {
			countt.innerText = count + increment;
			setTimeout(updateCount, 1000);
		} else {
			count.innerText = target;
		}
	};
	updateCount();
});

$(document).ready(function () {
	$(".accordion").click(function () {
		$(this).find("i").toggleClass("fa-angle-down fa-angle-up");
	});
});

