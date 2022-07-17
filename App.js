/** @format */
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );
}
