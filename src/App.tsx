import { lazy } from "react";
import { Toaster } from "./components/ui/sonner";
import { BrowserRouter as Router } from "react-router-dom";

import "./api/interceptor";
const AppContent = lazy(() => import("./AppContent"));
// import Page from "@/pages/public/Page";


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
        {/* <Routes>
          <Route path="/share/public/:id" element={<Page />} />
        </Routes> */}
      </Router>
    </div>
  );
}
