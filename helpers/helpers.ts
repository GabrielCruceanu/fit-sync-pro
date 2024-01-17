export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

export const toDateTime = (secs: number) => {
  var t = new Date("1970-01-01T00:30:00Z"); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export const validateEmail = (email: string) => {
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !!email.match(validEmailRegex);
};

export const validateUsername = (username: string) => {
  const validUsernameRegex =
    /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  return validUsernameRegex.test(username);
};
export const validateOnlyLetter = (input: string) => {
  const validUsernameRegex = /^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z])*[a-zA-Z]+$/;
  return validUsernameRegex.test(input);
};
export const validateIsPhoneNumber = (input: string) => {
  if (input.length !== 10) {
    return false;
  }
  const validUsernameRegex =
    /^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/;
  return validUsernameRegex.test(input);
};

export const handleInputRequired = (value?: string) => {
  return value === "" || value === undefined;
};
export const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const formatPhoneNumber = (phoneNumber: string): string => {
  let clearNumber: string = phoneNumber;

  if (clearNumber.includes(" ")) {
    clearNumber = clearNumber.replace(/\s/g, "");
  }
  if (clearNumber.includes("(")) {
    clearNumber = clearNumber.replace("(", "");
  }
  if (clearNumber.includes(")")) {
    clearNumber = clearNumber.replace(")", "");
  }
  if (clearNumber.startsWith("+", 0)) {
    clearNumber = clearNumber.slice(1);
  }
  if (clearNumber.startsWith("4", 0)) {
    clearNumber = clearNumber.slice(1);
  }
  if (clearNumber.startsWith("004", 0)) {
    clearNumber = clearNumber.slice(3);
  }

  return clearNumber;
};
