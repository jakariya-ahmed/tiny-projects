/**
 * Toggles visiblity between two form sections using tailwind's `hidden` utility
 * 
 * 
 * 
 * 
 */
const regiBtn = document.getElementById('regi-btn');
const loginBtn = document.getElementById('login-btn')

function toggleForm(showId, hideId) {
    const showEl = document.getElementById(showId);
    const hideEl = document.getElementById(hideId);

    // Defensive check: only procced if both elements exist in the DOM
    if (!showEl || !hideEl) {
        console.warn(`Form toggle failed. One or both elements not found: ${showId}, ${hideId}`);
        return;
    }

    // Hide the inactive form by addint Tailwind's `hidden` utility class
    hideEl.classList.add('hidden');

    // Show the inactive form by removing the `hidden` class
    showEl.classList.remove('hidden');
    

}


/**
 * Event Handler: Switch from login form to register form
 * Trigged by the "Create Account" button click
 * 
 */


regiBtn.addEventListener('click', () => {
    regiBtn.classList.add('text-white', 'bg-orange-500','text-white','rounded-full');
    loginBtn.classList.remove('text-white', 'bg-orange-500','text-white','rounded-full');
    toggleForm('register-form', 'login-form');

});


/**
 * Event Handler: Swtich from register form to back login form
 * Trigged by the 'Login' button click
 */

loginBtn.addEventListener('click', () => {
    regiBtn.classList.remove('text-white', 'bg-orange-500','text-white','rounded-full');
    loginBtn.classList.add('text-white', 'bg-orange-500','text-white','rounded-full');
    toggleForm('login-form','register-form');
});
















