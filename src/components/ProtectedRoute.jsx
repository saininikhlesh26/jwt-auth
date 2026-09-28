function ProtectedRoute({ user, children }) {
  if (!user) {
    return <p>Please login to access the Dashboard.</p>;
  }

  return children;
}

export default ProtectedRoute;