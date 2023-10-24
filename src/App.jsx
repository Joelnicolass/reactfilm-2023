import { environment } from "@environments";

const App = () => {
  return (
    <div>
      <h1>APP PARA PELIS</h1>
      <h2>{environment.title}</h2>
    </div>
  );
};

export default App;
