// Local imports from project
import ProtectedRoute from "./ProtectedRoute";

export const metadata = {
  title: "The Coffin | Admin",
};

export default function Layout({ children }) {
  return (
    <ProtectedRoute>{children}</ProtectedRoute>
  );
}
