// Local Storage: Stores data on the user's browser, persistent across sessions.
// Good for storing user preferences or data that doesn't need to be shared with the server.
// Example: Storing user's theme preference.
localStorage.setItem('theme', 'dark');
let savedTheme = localStorage.getItem('theme');
console.log(`Saved theme: ${savedTheme}`); // Output: Saved theme: dark

// Session Storage: Stores data on the user's browser, only available during the current session.
// Good for temporary data or data that needs to be accessible only during the current session.
// Example: Storing a shopping cart for a user.
sessionStorage.setItem('cart', JSON.stringify(['apple', 'banana']));
let cartItems = JSON.parse(sessionStorage.getItem('cart'));
console.log(`Cart items: ${cartItems}`); // Output: Cart items: ["apple", "banana"]

// Cookies: Stores small pieces of data on the user's browser, can be accessed by the server.
// Good for storing session information, user authentication data, or tracking user activity.
// Example: Storing a user's session ID.
document.cookie = 'sessionID=1234567890; expires=Thu, 18 Dec 2023 12:00:00 UTC';

// To retrieve the cookie value:
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Example usage:
let sessionID = getCookie('sessionID');
console.log(`Session ID: ${sessionID}`); // Output: Session ID: 1234567890
