import Televison from "../assets/Images/Television.svg"
import Profile from "../assets/Images/Profile.svg"
import Arrow from "../assets/Images/Arrow.svg"
import Telescope from "../assets/Images/Telescope.svg"
export const Avtar = "https://i.pinimg.com/736x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"
export const MainImage ="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg";
export const MainImage1 = "https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_medium.jpg";
export const reasonData = [
    {
        id: 1,
        title: "Enjoy on your TV",
        para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        icon: Televison
    },
    {
        id: 2,
        title: "Download your shows to watch offline",
        para: "Save your favourites easily and always have something to watch.",
        icon: Arrow
    },
    {
        id: 3,
        title: "Watch everywhere",
        para: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
        icon: Telescope
    },
    {
        id: 4,
        title: "Create profiles for kids",
        para: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
        icon: Profile
    },
]
export const accordianData = [
    {
        title: "What is Netflix?",
        para:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    }
    ,{
        title: "How much does Netflix cost?",
        para: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    }
    ,{
        title: "Where can I watch?",
        para: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    }
    ,{
        title: "How do I cancel?",
        para: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."
    }
    ,{
        title: "What can I watch on Netflix?",
        para: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
    ,{
        title: "Is Netflix good for kids?",
        para: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]
export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mjk1NDg4OWU2YmJmZDA4ODgyMTgwYjMwZmY2NGFjZiIsIm5iZiI6MTc0MzM0MTY0NC43MDMsInN1YiI6IjY3ZTk0ODRjYWY3NTJhM2IyNGY2ZWRjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fNJLL1EBySZ2bW36CbMnHz5SSt5dRYOPBqZMbtS0dJo'
  }
};
// export const nowPlayingMovieURL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const nowPlayingMovieURL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const nowPopularMovieURL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const topRatedMoviesURL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const upcomingMoviesURL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const trendingMoviesURL = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
export const popularTvShowURL = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
export const movieImageURL = "https://image.tmdb.org/t/p/w500"


// Multilingual data
export const Supported_Languages = [
    {identifier: "en", name: "English"},
    {identifier: "hindi", name: "Hindi"},
    {identifier: "spanish", name: "Spanish"},
]