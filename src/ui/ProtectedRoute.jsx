function ProtectedRoute({ children }) {
  // 1- Load the Authenticated user

  // 2- While loading, show a spinner

  // 3. if their is no authenticated user redirect to login page

  // 4. if their is authenticated user render the app
  return <div>{children}</div>;
}

export default ProtectedRoute;
