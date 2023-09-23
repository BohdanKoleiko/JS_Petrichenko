'use strict'
import showThanksMsg from "./showThanksMsg";

export const getData = async function (url) {
   const response = await fetch(url);

   if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
   }

   return response.json()
}

const postData = async function (url, data) {
   const response = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json',
      },
      body: data,
   });

   if (response.ok) {
      return response
   } else {
      throw new Error(`Could not fetch: ${url}, status: ${response.status}`)
   }
}

export function proccessingForms(form) {
   const message = {
      loading: "<img class='loading' src='img/arrow-loading.svg' alt='img that shows us a loading proces'>",
      success: "Дякую, скоро ми з вами зв'яжемся",
      failure: 'Упс, щось зламалося'
   }

   form.addEventListener('submit', (e) => {
      e.preventDefault();

      const div = document.createElement('div');
      div.classList.add('message');
      form.append(div);

      const formData = new FormData(form);
      //const parsFormData = {};
      //formData.forEach(function (value, key) {
      //   parsFormData[key] = value;
      //});
      const jsonFormData = JSON.stringify(Object.fromEntries(formData.entries()));

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

      postData('http://localhost:3000/requests', jsonFormData)
         .then(response => {
            if (response.status === 200 || response.status === 201) {
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