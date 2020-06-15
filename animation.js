// transitions

const slideIns = document.querySelectorAll(".slide-in");

const slideOptions = {
	rootMargin: "0px 0px -100px 0px",
	threshold: 0
};
const slideObserver = new IntersectionObserver(function(entries, slideObserver) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
			entry.target.classList.add("appear");
			slideObserver.unobserve(entry.target);
		} else {
			entry.target.classList.remove("appear");
		}
	});
}, slideOptions);

slideIns.forEach(slideIn => {
	slideObserver.observe(slideIn);
})