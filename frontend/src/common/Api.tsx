export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const ApiLists = {
  register: {
    api: "/api/users/register",
    method: "post",
  },
  login: {
    api: "/api/users/login",
    method: "post",
  },
};
