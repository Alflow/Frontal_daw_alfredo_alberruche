const NAME = "localhost",
  PORT = "3080",
  DOMAIN = `http://${NAME}:${PORT}`,
  POKEMON = `${DOMAIN}/pokemon`,
  SIGNUP = `${DOMAIN}/users/register`,
  LOGIN = `${DOMAIN}/users/login`;
export default {
  NAME,
  DOMAIN,
  POKEMON,
  SIGNUP,
  LOGIN,
};
