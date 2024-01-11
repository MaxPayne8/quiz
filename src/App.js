import logo from "./logo.svg";
import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Results from "./components/Results";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App font-signature">
        <Outlet />
      </div>
    </Provider>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/quiz/:ques",
        element: <Quiz />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
]);
export default App;
