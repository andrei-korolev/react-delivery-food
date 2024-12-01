import { Provider } from "react-redux";
import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import "./App.css";
import { store } from "../../redux/store";

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Restaurants />
      </Layout>
    </Provider>
  );
}
