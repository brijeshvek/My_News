import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import MyContant from "./Components/MyContant";
import  {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./Components/About";

function App() {
  const key = process.env.REACT_APP_API_KEY;
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <News
                key="home"
                apiKey={key}
                pageSize={10}
                category="General"
                country="in"
              />
            }
          ></Route>
          <Route
            path="home"
            element={
              <News
                key="home"
                apiKey={key}
                pageSize={10}
                category="General"
                country="in"
              />
            }
          ></Route>

          <Route
            path="business"
            element={
              <News
                key="business"
                apiKey={key}
                pageSize={10}
                category="Business"
                country="in"
              />
            }
          ></Route>
          <Route
            path="entertainment"
            element={
              <News
                key="entertainment"
                apiKey={key}
                pageSize={10}
                category="Entertainment"
                country="in"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                key="health"
                apiKey={key}
                pageSize={10}
                category="Health"
                country="in"
              />
            }
          ></Route>
          <Route
            path="science"
            element={
              <News
                key="science"
                apiKey={key}
                pageSize={10}
                category="Science"
                country="in"
              />
            }
          ></Route>
          <Route
            path="sports"
            element={
              <News
                key="sports"
                apiKey={key}
                pageSize={10}
                category="Sports"
                country="in"
              />
            }
          ></Route>
          <Route
            path="technology"
            element={
              <News
                key="technology"
                apiKey={key}
                pageSize={10}
                category="Technology"
                country="in"
              />
            }
          ></Route>
          {/* <Route path="about" element={<About apiKey={key}/>}></Route> */}
          {!(<MyContant />) && (
            <Route path="contant" element={<MyContant apiKey={key} />}></Route>
          )}
        </Routes>
        {/* <About /> */}
          <MyContant/>
      </Router>
    </>
  );
}

export default App;
