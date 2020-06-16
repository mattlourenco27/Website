// transitions

const slideIns = document.querySelectorAll(".slide-in");

const slideOptions = {
	rootMargin: "300px 0px -100px 0px",
	threshold: 0
};
const slideObserver = new IntersectionObserver(function(entries, slideObserver) {
	entries.forEach(entry => {
		if(entry.isIntersecting || entry.target.getBoundingClientRect().top < 0) {
			entry.target.classList.add("appear");
		} else if(!entry.isIntersecting && entry.target.getBoundingClientRect().top > 0) {
			entry.target.classList.remove("appear");
		}
	});
}, slideOptions);

slideIns.forEach(slideIn => {
	slideObserver.observe(slideIn);
})

// header pop-in and out

var lastScroll = 0;
var downScrolls = 0;
const header = document.getElementsByTagName("header")[0];

window.onscroll = function(e) {
	var scrolledUp = this.lastScroll > this.scrollY;
	
	if(scrolledUp) {
		downScrolls = 0;
	} else if(downScrolls < 10) {
		downScrolls += 1;
	}

	if(downScrolls >= 10) {
		header.classList.add("hide");
	} else {
		header.classList.remove("hide");
	}

	this.lastScroll = this.scrollY;
}

// edit anchors to give space for header

window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 65);
});