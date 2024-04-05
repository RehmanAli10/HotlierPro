import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1- Load the Authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2- if their is no authenticated user redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, navigate, isLoading]
  );

  // 3- While loading, show a spinner
  if (isLoading)
    <FullPage>
      <Spinner />;
    </FullPage>;

  // 4. if their is authenticated user render the app
  if (isAuthenticated) return <div>{children}</div>;
}

export default ProtectedRoute;
