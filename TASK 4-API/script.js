document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const securedPage = document.getElementById('securedPage');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const errorMessage = document.getElementById('errorMessage');

    loginButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // In a real system, you should perform server-side validation here.
        // For simplicity, we use a hardcoded username and password.
        if (username === 'siddhu120' && password === '1234') {
            loginForm.style.display = 'none';
            securedPage.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
        }
    });

    logoutButton.addEventListener('click', function () {
        loginForm.style.display = 'block';
        securedPage.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
        errorMessage.style.display = 'none';
    });
});
