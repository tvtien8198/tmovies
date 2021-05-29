let hamburger_menu = document.getElementById("hamburger-menu")
hamburger_menu.onclick = () => {
    hamburger_menu.classList.toggle("active");
    document.getElementById("nav-menu").classList.toggle("active");
}

let open_search = document.getElementById("open-search")

let box_search = document.querySelector(".box-search")

let search = document.querySelector(".search")

let close_search = document.getElementById("close-search")

let back_to_top = document.getElementById("back-to-top")

const backToTop = () => {
    window.scrollY > 100 ? back_to_top.classList.add("active") : back_to_top.classList.remove("active")
}

// const handleBackToTop = () => {
//     let y = document.documentElement.scrollTop || document.body.scrollTop;

//     if(y > 0) {
//         window.requestAnimationFrame(handleBackToTop);
//         window.scrollTo(0, y - y / 7);
//     }
// }

// back_to_top.onclick = handleBackToTop;

window.addEventListener("scroll", backToTop)

open_search.onclick = () => {
    box_search.classList.add("active")
    search.classList.add("active")
}

close_search.onclick = () => {
    box_search.classList.remove("active")
    search.classList.remove("active")
}

const getSlides = () => {
    let hero_slides = slides.map(slide => {
        return `
        <div class="hero-slide-item">
            <img src="${slide.img_slide}" alt="">
            <div class="overlay"></div>
            <div class="hero-slide-item-content">
                <div class="item-content-wrapper">
                    <div class="item-content-title top-down">
                    ${slide.title_slide}
                    </div>
                    <div class="movie-infos top-down delay-2">
                        <div class="movie-info">
                            <i class="bx bxs-star"></i>
                            <span>${slide.start}</span>
                        </div>
                        <div class="movie-info">
                            <i class="bx bxs-time"></i>
                            <span>${slide.times}</span>
                        </div>
                        <div class="movie-info">
                            <i class='bx bxs-heart'></i>
                            <span>${slide.heart}</span>
                        </div>
                        <div class="movie-info">
                            <span>${slide.hd}</span>
                        </div>
                        <div class="movie-info">
                            <span>${slide.age}</span>
                        </div>
                        
                    </div>
                    <div class="item-content-description top-down delay-4">
                        ${slide.description}
                    </div>
                    <div class="item-action top-down delay-6">
                        <a href="#" class="btn btn-hover">
                            <i class="bx bxs-right-arrow"></i>
                            <span>Watch Now</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    })
    document.getElementById("hero-carousel").innerHTML = hero_slides.join("");
}

getSlides();

const getMovies = () => {
    return new Promise(resolve => {
        let mvs = movies.filter(movie =>{
            return (movie.id) % 2;
        })
        resolve(mvs);
    })
}

const getMoviesByCat = (cat) => {
    return new Promise(resolve => {
        let movie_cat = movies.filter(movie => {
            return cat == movie.cat;
        })
        resolve(movie_cat);
    })
}

getMoviesByCat("Chiếu rạp")
    .then(movies => {
        let movies_theater = movies.map(movie_cat => {
            return `
                <a href="#" class="movie-item">
                <div class="hd-sub">${movie_cat.hd}</div>
                <span class="info-age"><p>${movie_cat.age}</p></span>
                    <img src="${movie_cat.img_movie}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                        ${movie_cat.title_movie}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${movie_cat.start}</span>
                            </div>
                            <div class="movie-info">
                                <i class="bx bxs-time"></i>
                                <span>${movie_cat.times}</span>
                            </div>
                            <div class="movie-info">
                                <i class='bx bxs-heart'></i>
                                <span>${movie_cat.heart}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        })
        document.getElementById("movies-theater").innerHTML = movies_theater.join("");
    })

getMoviesByCat("Phim Lẻ")
    .then(movies => {
        let movies_odd = movies.map(movie_cat => {
            return `
                <a href="#" class="movie-item">
                <div class="hd-sub">${movie_cat.hd}</div>
                <span class="info-age"><p>${movie_cat.age}</p></span>
                    <img src="${movie_cat.img_movie}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                        ${movie_cat.title_movie}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${movie_cat.start}</span>
                            </div>
                            <div class="movie-info">
                                <i class="bx bxs-time"></i>
                                <span>${movie_cat.times}</span>
                            </div>
                            <div class="movie-info">
                                <i class='bx bxs-heart'></i>
                                <span>${movie_cat.heart}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        })
        document.getElementById("movies-odd").innerHTML = movies_odd.join("");
    })

getMoviesByCat("Anime")
    .then(movies => {
        let movies_anime = movies.map(movie_cat => {
            return `
                <a href="#" class="movie-item">
                <div class="hd-sub">${movie_cat.hd}</div>
                    <span class="info-age"><p>${movie_cat.age}</p></span>
                    <img src="${movie_cat.img_movie}" alt="">
                    <div class="movie-item-content">
                        <div class="movie-item-title">
                        ${movie_cat.title_movie}
                        </div>
                        <div class="movie-infos">
                            <div class="movie-info">
                                <i class="bx bxs-star"></i>
                                <span>${movie_cat.start}</span>
                            </div>
                            <div class="movie-info">
                                <i class="bx bxs-time"></i>
                                <span>${movie_cat.times}</span>
                            </div>
                            <div class="movie-info">
                                <i class='bx bxs-heart'></i>
                                <span>${movie_cat.heart}</span>
                            </div>
                        </div>
                    </div>
                </a>
            `;
        })
        document.getElementById("movies-anime").innerHTML = movies_anime.join("");
    })

getMovies()
    .then(movies => {
        let top_movies_slide = document.getElementById("top-movies-slide");
        let movies_slide = movies.map(movie => {
            return `
            <div class="movie-item">
                <div class="hd-sub">${movie.hd}</div>
                <span class="info-age"><p>${movie.age}</p></span>
                <img src="${movie.img_movie}" alt="">
                <div class="movie-item-content">
                    <div class="movie-item-title">
                        ${movie.title_movie}
                    </div>
                    <div class="movie-infos">
                        <div class="movie-info">
                            <i class="bx bxs-star"></i>
                            <span>${movie.start}</span>
                        </div>
                        <div class="movie-info">
                            <i class="bx bxs-time"></i>
                            <span>${movie.times}</span>
                        </div>
                        <div class="movie-info">
                            <i class='bx bxs-heart'></i>
                            <span>${movie.heart}</span>
                        </div>
                    </div>
                </div>
            </div>
            `;
        })
        top_movies_slide.innerHTML = movies_slide.join(""); 
    })

$(document).ready(() => {

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 5
            },
            1600: {
                items: 6
            }
        }
    })
    $('.movies-slide').owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 5
            },
            1600: {
                items: 6
            }
        }
    })
})