# moviesTinder
React Native Movie Tinder app

Redux + Realm JS + react-native-swipe-cards

themoviedb API is consumed and then a list of movies is displayed to the user
If the user likes a movie, the movie will be saved locally using Realm JS
The dislikes are also saved in order to not be displayed again.

There is a pagination implemented, themoviedb provides pages with 20 entries, after seing 20 movies, the page number is incremented and the app fetches 20 more movies.
