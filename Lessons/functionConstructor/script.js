'use strict'

document.addEventListener('DOMContentLoaded', () => {
   const tbody = document.querySelector('tbody');
   let removeUserBtn;
   const addUserBtn = document.querySelectorAll('.add-new-user');
   const modal = document.querySelector('.modal');
   const btn = modal.querySelector('button');
   const usersDB = [];


   function User(name, years, nickname) {
      this.name = name;
      this.years = years;
      this.nickname = nickname;
   }

   const createNewRow = function (name, nickname, years) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
         <td class="userName">${name}</td>
         <td class="userNikname">${nickname}</td>
         <td class="years">${years}</td>
         <td class="remove-user">
            <img src="person-delete.svg" alt="remove the user icon">
         </td>
      `;
      tbody.append(tr);

      removeUserBtn = document.querySelectorAll('.remove-user');
      removeAddedRow(removeUserBtn);
   }

   const pushUsersFromDBToTable = function (db) {
      if (!db.length) {
         tbody.innerHTML = '';
      } else {
         createNewRow(db[db.length - 1].name, db[db.length - 1].nickname, db[db.length - 1].years);
      }
   }
   pushUsersFromDBToTable(usersDB);


   // Push the button to call modal window to add new user to the table.
   addUserBtn.forEach(item => {
      item.addEventListener('click', () => {
         modal.dataset.active = true;
      });
   });


   // It allows to remove user from the table by push the remove button.
   function removeAddedRow(removeBtn) {
      //let updatedUsersDB;

      removeBtn.forEach((btn, i) => {
         btn.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.className == 'remove-user' || target.parentElement.className == 'remove-user') {
               usersDB.splice(i, 1);
               pushUsersFromDBToTable(usersDB);
            }
         });
      });
   }


   // If user click in any area that isn`t a form window the modal window will close.
   modal.addEventListener('click', (e) => {
      if (e.target == modal) {
         e.target.dataset.active = false;
      }
   });

   // it adds a new user to the DB and on the table and also closes the modal window.
   btn.addEventListener('click', (e) => {
      e.preventDefault();

      const userName = document.getElementById('name').value;
      const userNickname = document.getElementById('nickname').value;
      const userYears = document.getElementById('years').value;

      if (userName && userNickname && userYears) {
         const newUser = new User(userName, userYears, userNickname);
         usersDB.push(newUser);
         pushUsersFromDBToTable(usersDB);
         modal.dataset.active = false;
      }
   });
});