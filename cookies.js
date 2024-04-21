export function setCookie(name, value, path = "/") {
  const currentDate = new Date();
  const farFutureDate = new Date(
    currentDate.getTime() + 100 * 365 * 24 * 60 * 60 * 1000
  ); // 100 years from now
  const expires = farFutureDate.toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
}

export function getAllCookies() {
  const cookies = {};
  document.cookie.split(";").forEach((cookie) => {
    const parts = cookie.split("=");
    const name = parts[0].trim();
    const value = decodeURIComponent(parts.slice(1).join("="));
    cookies[name] = value;
  });
  return cookies;
}

export function getCookie(name) {
  const cookies = getAllCookies();
  return cookies[name];
}

export function deleteCookie(name) {
  // Get the cookie's expiration date and set it to a past date
  const pastDate = new Date(0).toUTCString();
  document.cookie = `${name}=; expires=${pastDate}; path=/`;
}
