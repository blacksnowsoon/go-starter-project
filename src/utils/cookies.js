export function getCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .map((c) => c.trim())
    .filter((c) => c.startsWith(name + "="));
  return cookie.length === 1 ? cookie[0].substring(name.length + 1) : undefined;

}

export function writeCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expDays ) {
    const date = new Date();
    date.setTime(date.getTime() + options.expDays * 24 * 60 * 60 * 1000);
    options.expires = date.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}