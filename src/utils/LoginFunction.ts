const LoginFunction = () => {
  const ClientId = "2f4325e7f6bd45d28ef2b94d88000968";
  const RedirectUrl = 'http://127.0.0.1:5173/'
  // const RedirectUrl = "http://192.168.29.220:5173/";
  const AuthUrl = "https://accounts.spotify.com/authorize";
  const AuthScopes = [
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-library-read",
    "user-library-modify",
  ];
  const AuthUrlWithParams = `${AuthUrl}?client_id=${ClientId}&redirect_uri=${RedirectUrl}&scope=${AuthScopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  window.location.href = AuthUrlWithParams;
};

export default LoginFunction;
