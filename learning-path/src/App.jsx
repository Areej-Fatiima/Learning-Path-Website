// // src/App.jsx
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Roadmap from './pages/Roadmap';
// import GoalForm from './components/GoalForm';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/goal-form" element={<GoalForm />} />
//       <Route path="/roadmap" element={<Roadmap />} />
//     </Routes>
//   );
// }

// export default App;


// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import GoalForm from './components/GoalForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/goal-form" element={<GoalForm />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
}

export default App;