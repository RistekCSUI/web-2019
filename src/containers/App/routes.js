import NotFoundPage from "../../components/NotFoundPage";
import RistekWeb from "../../containers/RistekWeb";

export const routes = [
  {
    component: RistekWeb,
    exact: true,
    path: "/"
  },
  { component: NotFoundPage }
];
