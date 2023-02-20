import * as part_2 from './part-2.js';
import * as part_3 from './part-3.js';

//part_2.personalMovieDB
//part_2.firstSolution()

const button = document.querySelector('.button');

button.addEventListener('click', function () {
   part_3.personalMovieDB.getStarted();
   part_3.personalMovieDB.askAboutMovie();
   part_3.personalMovieDB.showMyDB();
   part_3.personalMovieDB.writeYourGenres();
});