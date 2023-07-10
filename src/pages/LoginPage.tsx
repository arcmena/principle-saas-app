import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "@/components/auth/AuthContext";
import { Button } from "@/components/elements/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    auth.signIn("user", () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" type="text" />
        </label>{" "}
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export { LoginPage };
