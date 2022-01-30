import cookie from "js-cookie";

export const getAuthCookie = () => {
  let c = cookie.get("blueHatAuth");
  let parsed = null;
  if (c) {
    parsed = JSON.parse(c);
  }
  return parsed;
};

export const setAuthCookie = (userId: string, token: any) => {
  const auth = { userId, token };
  cookie.set("blueHatAuth", auth, {
    path: "/",
    domain: "bluehatcard.com",
  });
  cookie.set("blueHatAuth", auth, {
    path: "/",
    domain: "localhost",
  });
};

export const removeAuthCookie = () => {
  cookie.remove("blueHatAuth", {
    path: "/",
    domain: "bluehatcard.com",
  });

  cookie.remove("blueHatAuth", {
    path: "/",
    domain: "localhost",
  });
};
