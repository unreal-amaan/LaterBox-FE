import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";
export default function App() {

  return (
    <div className="h-screen w-screen">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}
