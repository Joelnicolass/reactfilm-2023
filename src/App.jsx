import { environment } from "@environments";

const App = () => {
  return (
    <div>
      <h1>SOY UN ENV {import.meta.ENV.VITE_APP_TMDB_API_KEY}</h1>
      <h1>APP PARA PELIS</h1>
      <h2>{environment.title}</h2>
    </div>
  );
};

export default App;
