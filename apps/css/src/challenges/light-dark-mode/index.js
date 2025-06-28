const themeSwitch = document.querySelector('#themeSwitch');
const innnerThemeSwitch = document.querySelector('#innnerThemeSwitch');

themeSwitch.addEventListener('change', function () {
  if (themeSwitch.checked) {
    document.body.classList.add('dark');
    innnerThemeSwitch.checked = true;
  } else {
    document.body.classList.remove('dark');
    innnerThemeSwitch.checked = false;
  }
});
