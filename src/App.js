import Header from "./Header";
import Calls from "./components/Calls";
import CallLists from "./components/CallLists";
import CallDetail from "./components/CallDetail";
import Archived from "./components/Archived";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        <Routes>
          <Route exact path="/" element={<Calls />} />
          <Route path="/call/:id" element={<CallDetail />} />
          <Route path="/archived" element={<Archived />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
