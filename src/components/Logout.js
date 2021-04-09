import { logout } from "../services/authService";
const LogOut = ({ token, spotify }) => {
  return (
    <button onClick={(() => spotify.setAccessToken(null), console.log(token))}>
      Logout
    </button>
  );
};

export default LogOut;
