import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.checkLang();
    this.checkTheme();
  }

  // checks the theme and set the values in the localStorage.

  // DO NOT CHANGE //
  checkTheme() {
    if (localStorage.getItem('theme') === 'light') {
      // this.changeTheme('light');
      localStorage.setItem('theme', 'dark');
      this.changeTheme();
    } else if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      this.changeTheme();
    } else {
      localStorage.setItem('theme', 'light');
      this.changeTheme();
    }
  }

  // changing the theme icon and the theme according to the theme in localStorage.

  // DO NOT CHANGE //
  changeTheme() {
    if (localStorage.getItem('theme') === 'light') {
      $('#theme').html(`
                <svg
            class="bi bi-moon"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
            />
          </svg>
      `);

      $('body').css(
        'background',
        'linear-gradient(to right, #afb8af, #ffffff)'
      );
      $('body').css('color', 'black');
      localStorage.setItem('theme', 'dark');
    } else if (localStorage.getItem('theme') === 'dark') {
      $('#theme').html(`
      <svg class="bi bi-brightness-high" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>
      `);

      $('body').css(
        'background',
        'linear-gradient(to bottom, #232526, #414345)'
      );
      $('body').css('color', 'white');
      localStorage.setItem('theme', 'light');
    } else {
      $('#theme').html(`
                <svg
            class="bi bi-moon"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
            />
          </svg>
      `);

      $('body').css(
        'background',
        'linear-gradient(to right, #afb8af, #ffffff)'
      );
      $('body').css('color', 'black');
    }
  }

  // checks the language and set the values in the localStorage.

  // DO NOT CHANGE //
  checkLang() {
    localStorage.getItem('lang') === null && localStorage.setItem('lang', 'ar'),
      $('#lang').html(`
          <svg
            class="bi bi-type"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.244 13.081l.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"
            />
          </svg>
      `);
  }

  // changing the language icon and the langauge according to the lang in localStorage.

  // DO NOT CHANGE //
  changeLang() {
    if (localStorage.getItem('lang') === 'ar') {
      localStorage.setItem('lang', 'en');
      $('#lang').html('ع').css('font-weight', 'lighter');

      Swal.fire({
        text: 'changing the language...',
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading();
          setInterval(() => {
            const content = Swal.getContent();
          }, 100);
        },
      });
    } else if (localStorage.getItem('lang') === 'en') {
      localStorage.setItem('lang', 'ar');
      $('#lang').html(`
          <svg
            class="bi bi-type"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.244 13.081l.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"
            />
          </svg>
      `);
      Swal.fire({
        text: '...تغيير اللغة',
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading();
          setInterval(() => {
            const content = Swal.getContent();
          }, 100);
        },
      });
    } else {
      localStorage.setItem('lang', 'ar');
    }
  }
}
