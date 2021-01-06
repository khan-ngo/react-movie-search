import "./style/App.css";
import SearchMovies from "./Components/searchMovies";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
      <Footer />
    </div>
  );
}

export default App;
