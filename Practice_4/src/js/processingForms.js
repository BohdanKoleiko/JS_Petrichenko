'use strict'
import showThanksMsg from "./showThanksMsg";

function proccessingForms(form) {
   const message = {
      loading: "Завантаження",
      success: "Дякую, скоро ми з вами зв'яжемся",
      failure: 'Упс, щось зламалося'
   }

   form.addEventListener('submit', (e) => {
      e.preventDefault();

      const div = document.createElement('div');
      div.classList.add('message');
      form.append(div);

      const formData = new FormData(form);
      const parsFormData = {};
      formData.forEach(function (value, key) {
         parsFormData[key] = value;
      });
      const jsonFormData = JSON.stringify(parsFormData);

      showThanksMsg(div, message.loading);

      // Using AJAX
      //const request = new XMLHttpRequest();
      //request.open('POST', 'server.php');
      //request.setRequestHeader("Content-type", "application/json");
      //request.send(jsonFormData);

      //request.addEventListener('load', () => {
      //   if (request.status === 200) {
      //      showThanksMsg(div, message.success);
      //      form.reset();
      //   } else {
      //      showThanksMsg(div, message.failure);
      //   }
      //});

      // Using Fetch API
      fetch('servers.php', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: jsonFormData,
      })
         .then(data => {
            if (data.status === 200) {
               showThanksMsg(div, message.success);
            }
         })
         .catch(err => {
            showThanksMsg(div, message.failure);
         })
         .finally(() => {
            form.reset();
         })
   });
}

export default proccessingForms;