// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

const featuredProducts = [
	{
		name: "Dark blue alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
	{
		name: "Orange helmet for alpine TOUNDRA",
		price: "€300,00 EUR",
		image: "images/orange-helmet.png",
		tag: "LIMITED EDITION",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
	{
		name: "Dark blue alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
	{
		name: "Orange helmet for alpine TOUNDRA",
		price: "€300,00 EUR",
		image: "images/orange-helmet.png",
		tag: "LIMITED EDITION",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
	{
		name: "Dark blue alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
	{
		name: "Orange helmet for alpine TOUNDRA",
		price: "€300,00 EUR",
		image: "images/orange-helmet.png",
		tag: "LIMITED EDITION",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
	{
		name: "Dark blue alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
	{
		name: "Orange helmet for alpine TOUNDRA",
		price: "€300,00 EUR",
		image: "images/orange-helmet.png",
		tag: "LIMITED EDITION",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
	},
	{
		name: "Grey alpine climbing jacket",
		price: "€300,00 EUR",
		image: "images/dark-blue-jacket.png",
		tag: "BESTSELLER",
	},
];

function generateSlides() {
	const swiperWrapper = document.querySelector(".swiper-wrapper");
	swiperWrapper.innerHTML = "";

	featuredProducts.forEach((product) => {
		const slide = document.createElement("div");
		slide.className = "swiper-slide product-card";
		let tagClass;
		if (product.tag) {
			tagClass = product.tag.toLowerCase().replace(" ", "-");
		}

		slide.innerHTML = `
      <div class="product-image">
      ${
				product.tag
					? `<span class="product-tag ${tagClass}">${product.tag}</span>`
					: ""
			}
         <img src="images/heart.svg" class="wishlist-btn" alt="Add to Wishlist" width="24" height="24">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
    `;
		swiperWrapper.appendChild(slide);
	});

	const wishlistButtons = document.querySelectorAll(".wishlist-btn");
	wishlistButtons.forEach((button) => {
		button.addEventListener("click", function () {
			if (this.src.includes("heart.svg")) {
				this.src = "images/heartFull.svg";
				this.alt = "Remove from Wishlist";
			} else {
				this.src = "images/heart.svg";
				this.alt = "Add to Wishlist";
			}
		});
	});
}

function renderFeaturedProducts() {
	const swiperWrapper = document.querySelector(".swiper-wrapper");
	swiperWrapper.innerHTML = "";

	featuredProducts.forEach((product) => {
		const slide = document.createElement("div");
		slide.classList.add("swiper-slide");
		slide.innerHTML = `
      <div class="swiper-product-card">
        <div class="product-image">
        </div>
      </div>
    `;
		swiperWrapper.appendChild(slide);
	});
}

let currentPage = 1;
let totalPages = 100;
let numPerPage = 14;
let bannerAdded = false;
let swiper;
let currentViewportIsMobile = window.innerWidth <= 768;

// Control scroll behavior when modals are open
function lockScroll() {
	const scrollPosition = window.pageYOffset;
	document.body.style.top = `-${scrollPosition}px`;
	document.body.style.width = "100%";
	document.body.classList.add("no-scroll");
}

function unlockScroll() {
	const scrollY = document.body.style.top;
	const scrollPosition = parseInt(scrollY || "0") * -1;
	document.body.classList.remove("no-scroll");
	document.body.style.top = "";
	document.body.style.width = "";

	requestAnimationFrame(() => {
		window.scrollTo({
			top: scrollPosition,
			behavior: "instant",
		});
	});
}

// Initialize components when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
	if (window.innerWidth <= 768) updateSliderForMobile();
	initializeDropdown();
	updatePage();
	initializeMobileMenu();
});

window.addEventListener("load", function () {
	initializeSlider();
	// initializeDropdown();
	// updatePage();
	// initializeMobileMenu();
});

function initializeSlider() {
	const swiperWrapper = document.querySelector(".swiper-wrapper");
	if (swiperWrapper) swiperWrapper.innerHTML = "";

	generateSlides();

	swiper = new Swiper(".product-slider", {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 24,
		loop: true,
		loopedSlides: featuredProducts.length,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".swiper-button-next",
		},
		threshold: 10,
		touchRatio: 1.5,
		touchAngle: 45,
		followFinger: true,
		grabCursor: true,
		preloadImages: true,
		updateOnImagesReady: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: { slidesPerView: 1.1, slidesPerGroup: 1, spaceBetween: 16 },
			480: { slidesPerView: 1.2, slidesPerGroup: 1, spaceBetween: 16 },
			560: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 16 },
			768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 16 },
			992: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
			1200: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 24 },
		},
	});

	swiper.on("slideChange", () => {
		const progressBar = document.querySelector(".progress-bar");
		if (!progressBar) return;

		const isMobile = window.innerWidth <= 768;
		const totalProducts = featuredProducts.length;
		const topBarContainer = document.querySelector(".top-bar__container");

		if (isMobile) {
			const slidesPerView =
				swiper.params.slidesPerView > 1 ? swiper.params.slidesPerView : 1.2;

			const totalPositions = Math.max(
				1,
				totalProducts - Math.floor(slidesPerView)
			);

			let currentPosition = swiper.realIndex % totalProducts;

			const progressPercent = Math.min(
				100,
				(currentPosition / totalPositions) * 100
			);
			progressBar.style.transform = `translateX(${progressPercent * 3}%)`;

			topBarContainer.style.width = `${window.innerWidth}px`;

			deleteBlankSlides();
		} else {
			topBarContainer.removeAttribute("style");
			const slidesPerGroup = swiper.params.slidesPerGroup;

			const totalGroups = Math.ceil(totalProducts / slidesPerGroup);

			const currentGroupIndex =
				Math.floor(swiper.realIndex / slidesPerGroup) % totalGroups;

			const progressPercent = (currentGroupIndex / (totalGroups - 1)) * 100;

			progressBar.style.transform = `translateX(${progressPercent * 3}%)`;

			deleteBlankSlides();
		}
	});
}

function deleteBlankSlides() {
	if (swiper.params.slidesPerView !== 3) {
		document
			.querySelectorAll(".swiper-slide-blank")
			.forEach((el) => el.remove());
	}
}
window.addEventListener("resize", function () {
	const isMobile = window.innerWidth <= 768;

	if (isMobile !== currentViewportIsMobile) {
		currentViewportIsMobile = isMobile;
		updatePage();

		if (swiper) {
			swiper.update();
			if (isMobile) {
				updateSliderForMobile();
			}
		}
	}
});

function updateSliderForMobile() {
	if (swiper) {
		swiper.params.slidesPerView = 1.2;
		swiper.params.slidesPerGroup = 1;
		swiper.params.spaceBetween = 16;
		swiper.update();
	}
}

function initializeDropdown() {
	const dropdown = document.querySelector(".custom-dropdown");
	const dropdownHeader = dropdown.querySelector(".custom-dropdown__header");
	const dropdownOptions = dropdown.querySelectorAll(".dropdown-option");
	const selectedValue = dropdown.querySelector(".selected-value");

	dropdownHeader.addEventListener("click", () => {
		dropdown.classList.toggle("open");
	});

	dropdownOptions.forEach((option) => {
		option.addEventListener("click", () => {
			selectedValue.textContent = option.textContent;

			dropdownOptions.forEach((opt) => {
				opt.classList.remove("selected");
				opt.style.display = "block";
			});

			option.classList.add("selected");

			dropdownOptions.forEach((opt) => {
				if (opt.textContent === selectedValue.textContent) {
					opt.style.display = "none";
				}
			});

			dropdown.classList.remove("open");
			const newNumPerPage = parseInt(option.dataset.value);
			updateNumPerPage(newNumPerPage);
		});
	});

	document.addEventListener("click", (e) => {
		if (!dropdown.contains(e.target)) {
			dropdown.classList.remove("open");
		}
	});
}

// Fetch products from API and handle pagination
async function fetchPageData() {
	try {
		const productsDom = document.querySelector(".products");
		productsDom.innerHTML = "";
		bannerAdded = false;
		let allItems = [];

		// Calculate which API pages we need to fetch based on current pagination
		const startItem = (currentPage - 1) * numPerPage;
		const startPage = Math.floor(startItem / 10) + 1;
		const pagesNeeded = Math.ceil(numPerPage / 10);

		// API returns 10 items per page, so we might need multiple requests
		for (let i = 0; i < pagesNeeded; i++) {
			const pageToFetch = startPage + i;
			if (pageToFetch > totalPages) break;

			const response = await fetch(
				`https://brandstestowy.smallhost.pl/api/random?pageNumber=${pageToFetch}`
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			allItems = allItems.concat(data.data);
		}
		// Calculate offset within first page to start displaying from
		const offsetInFirstPage = startItem % 10;

		// Render products starting from the correct offset
		allItems
			.slice(offsetInFirstPage, offsetInFirstPage + numPerPage)
			.forEach((item, index) => {
				const productElement = document.createElement("div");
				productElement.classList.add("jacket-card");
				productElement.innerHTML = `
                <p class='product-id'>ID: ${
									item.id < 10 ? `0${item.id}` : item.id
								}</p>
                <img class="lazy-load" data-src="${item.image}" alt="${
					item.id
				}">
            `;
				productsDom.appendChild(productElement);

				// Add banner after 4th product on mobile, 5th on desktop
				if (
					!bannerAdded &&
					((window.innerWidth <= 768 && index === 3) ||
						(window.innerWidth > 768 && index === 4))
				) {
					const bannerElement = document.createElement("div");
					bannerElement.classList.add("banner-card");
					bannerElement.innerHTML = `
                    <img src="images/banner.jfif" alt="Banner" class="banner-image">
                    <div class="banner-content">
                        <div>
                            <p>FORMA'SINT.</p>                 
                            <h1>You'll look and feel like the champion.</h1>
                        </div>
                        <button class="banner-button">CHECK THIS OUT <img src="images/bannerArrow.svg" alt="Banner Arrow" class="banner-arrow-image"></button>
                    </div>
                `;
					productsDom.appendChild(bannerElement);
					bannerAdded = true;
				}
			});

		lazyLoadImages();
		initializeProductPopup();
	} catch (error) {
		console.error("Error fetching data from API:", error);
	}
}

function lazyLoadImages() {
	const lazyImages = document.querySelectorAll(".lazy-load");

	if (lazyImages.length === 0) return;

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					img.src = img.dataset.src;
					img.onload = () => img.classList.remove("lazy-load");
					observer.unobserve(img);
				}
			});
		},
		{
			root: null,
			threshold: 0.1,
		}
	);

	lazyImages.forEach((img) => observer.observe(img));
}

// Update number of products per page without resetting to page 1
function updateNumPerPage(newNumPerPage) {
	// Remember position of first visible item before changing items per page
	const firstItemIndex = (currentPage - 1) * numPerPage;
	numPerPage = newNumPerPage;
	const adjustedTotalPages = Math.ceil(1000 / numPerPage);
	// Calculate which page should show the same first item
	currentPage = Math.floor(firstItemIndex / numPerPage) + 1;
	if (currentPage > adjustedTotalPages) {
		currentPage = adjustedTotalPages;
	}
	updatePage();
}

// Render pagination controls

function renderPagination() {
	const paginationContainer = document.querySelector(".pagination");
	paginationContainer.innerHTML = "";
	const adjustedTotalPages = Math.ceil(1000 / numPerPage);
	const firstPageButton = document.createElement("button");
	firstPageButton.textContent = "1";
	firstPageButton.classList.add("page-button");
	firstPageButton.addEventListener("click", () => {
		if (currentPage !== 1) {
			currentPage = 1;
			updatePage();
		}
	});
	paginationContainer.appendChild(firstPageButton);

	const prevButton = document.createElement("button");
	prevButton.textContent = "Previous";
	prevButton.disabled = currentPage === 1;
	prevButton.addEventListener("click", () => {
		if (currentPage > 1) {
			currentPage--;
			updatePage();
		}
	});
	paginationContainer.appendChild(prevButton);

	const pageInfo = document.createElement("span");
	pageInfo.textContent = `Page ${currentPage} of ${adjustedTotalPages}`;
	paginationContainer.appendChild(pageInfo);

	const nextButton = document.createElement("button");
	nextButton.textContent = "Next";
	nextButton.disabled = currentPage === adjustedTotalPages;
	nextButton.addEventListener("click", () => {
		if (currentPage < adjustedTotalPages) {
			currentPage++;
			updatePage();
		}
	});
	paginationContainer.appendChild(nextButton);

	const lastPageButton = document.createElement("button");
	lastPageButton.textContent = adjustedTotalPages;
	lastPageButton.classList.add("page-button");
	lastPageButton.addEventListener("click", () => {
		if (currentPage !== adjustedTotalPages) {
			currentPage = adjustedTotalPages;
			updatePage();
		}
	});
	paginationContainer.appendChild(lastPageButton);
}

function updatePage() {
	fetchPageData();
	renderPagination();
}

function initializeProductPopup() {
	const products = document.querySelectorAll(".jacket-card");

	products.forEach((product) => {
		product.addEventListener("click", (e) => {
			e.preventDefault();

			const existingPopups = document.querySelectorAll(".popup-overlay");
			existingPopups.forEach((popup) => popup.remove());

			const productId = product.querySelector(".product-id").textContent;
			const productImage =
				product.querySelector("img").getAttribute("src") ||
				product.querySelector("img").getAttribute("data-src");

			// Create mobile-optimized popup
			const popupOverlay = document.createElement("div");
			popupOverlay.classList.add("popup-overlay");
			const isMobile = window.innerWidth <= 768;

			popupOverlay.innerHTML = `
        <div class="popup-content ${isMobile ? "mobile-popup" : ""}">
          <button class="popup-close"><img src="images/cross.svg" alt="Close"> CLOSE</button>
          <p class="popup-id">${productId}</p>
          <img src="${productImage}" alt="Product Image" ${
				isMobile ? 'class="mobile-product-image"' : ""
			}>
        </div>
      `;

			document.body.appendChild(popupOverlay);
			lockScroll();
			setTimeout(() => {
				popupOverlay.classList.add("visible");
			}, 10);
			const closeButton = popupOverlay.querySelector(".popup-close");

			closeButton.addEventListener("click", () => {
				closePopup(popupOverlay);
			});

			popupOverlay.addEventListener("click", (e) => {
				if (e.target === popupOverlay) {
					closePopup(popupOverlay);
				}
			});
		});
	});

	function closePopup(overlay) {
		overlay.classList.remove("visible");
		setTimeout(() => {
			overlay.remove();
			unlockScroll();
		}, 300);
	}
}

// Mobile menu functionality with scroll position save
function initializeMobileMenu() {
	const menuBtn = document.querySelector(".mobile-menu__btn");
	const menu = document.querySelector(".mobile-menu");
	const overlay = document.querySelector(".mobile-menu__overlay");
	const closeBtn = document.querySelector(".mobile-menu__close");
	const navLinks = document.querySelectorAll(".mobile__nav a");

	menuBtn.addEventListener("click", () => {
		lockScroll();
		menu.classList.add("active");
		overlay.classList.add("active");
	});

	function closeMenu() {
		menu.classList.remove("active");
		overlay.classList.remove("active");
		unlockScroll();
	}

	closeBtn.addEventListener("click", closeMenu);
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			const targetSection = document.querySelector(targetId);
			closeMenu();
			setTimeout(() => {
				if (targetSection) {
					targetSection.scrollIntoView({ behavior: "smooth" });
				}
			}, 300);
		});
	});

	// Close menu when clicking outside of it
	document.addEventListener("click", function (e) {
		if (
			menu.classList.contains("active") &&
			!menu.contains(e.target) &&
			!menuBtn.contains(e.target)
		) {
			closeMenu();
		}
	});

	// Prevent clicks on overlay from propagating
	overlay.addEventListener("click", function (e) {
		e.stopPropagation();
		closeMenu();
	});
}

const style = document.createElement("style");
style.textContent = `...`;
document.head.appendChild(style);
