import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";

import AppContent from "./AppContent";
import "./api/interceptor"


export default function App() {

  return (
    <div className="h-screen w-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,   
          style: {
            fontFamily: "Sora, sans-serif",
            color: "white",
            fontSize: "16px",
          },
        }}
      />
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}
