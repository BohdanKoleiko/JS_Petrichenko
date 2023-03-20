import * as part_2 from './part-2.js';
import * as part_3 from './part-3.js';
import * as part_4 from './part-4.js';

//part_2.personalMovieDB
//part_2.firstSolution()

const button = document.querySelector('.button');
const parts = part_4;

button.addEventListener('click', function () {
   parts.personalMovieDB.getStarted();
   parts.personalMovieDB.askAboutMovie();
   parts.personalMovieDB.writeYourGenres();
   parts.personalMovieDB.showMyDB();
});
