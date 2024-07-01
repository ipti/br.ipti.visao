import React, { Suspense, lazy } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import PdfPrioridade from "./Pdf/PdfPrioridadeStudent";
import PdfReceita from "./Pdf/PdfReceita";
import MainLayout from "./components/Layouts/MainLayout";
import NotFoundPage from "./components/Layouts/NotFoundPage";
import CircularLoading from "./components/Loading/CircularLoading";
import { Classroom, ClassroomForm } from "./containers/Classroom";
import CreateClassroom from "./containers/Classroom/AddClassroom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import FormRegistration from "./containers/Registration/FormRegistration/FormRegistration";
import { isAuthenticated } from "./services/auth";
import PdfTodasReceita from "./Pdf/PdfTodasReceitas";
import CreateUserScreen from "./screens/Users/CreateUser";
import PrivateRouterProvider from "./context/PrivateRouter/context";
import CreateRegistration from "./screens/Classroom/CreateRegistration";
import Report from "./screens/Report"

//const Home = lazy(() => import("./containers/Home"));

const School = lazy(() => import("./containers/School/School"));
const SchoolClassrooms = lazy(() =>
  import("./containers/School/SchoolClassrooms")
);

const SchoolCreate = lazy(() => import("./containers/School/SchoolCreate"));

const RegistrationClassroom = lazy(() =>
  import("./containers/Classroom/Registration/Registration")
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <PrivateRouterProvider>
          <MainLayout>
            <Suspense fallback={<CircularLoading />}>
              <Component {...props} />
            </Suspense>
          </MainLayout>
        </PrivateRouterProvider>
      ) : (
        <Redirect
          to={{ pathname: "/register", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/matricula" exact component={FormRegistration} />
      <PrivateRoute exact path="/" component={School} />
      <PrivateRoute exact path="/usuario/criar" component={CreateUserScreen} />
      <PrivateRoute exact path="/escolas" component={School} />
      <PrivateRoute exact path="/escolas/:id" component={SchoolClassrooms} />
      <PrivateRoute exact path="/criar/escolas" component={SchoolCreate} />
      <PrivateRoute exact path="/turmas" component={Classroom} />
      <PrivateRoute
        exact
        path="/turmas/:id/matricula/:idRegistration"
        component={RegistrationClassroom}
      />
      <Route
        exact
        path="/turmas/:id/matricula/:idRegistration/receita"
        component={PdfReceita}
      />
      <PrivateRoute exact path="/turmas/:id" component={ClassroomForm} />
      <PrivateRoute exact path="/turmas/:id/criar-aluno" component={CreateRegistration} />

      <PrivateRoute
        exact
        path="/turmas/:id/matricula/:idRegistration"
        component={RegistrationClassroom}
      />
      <Route exact path="/turmas/:id/pdf" component={PdfPrioridade} />
      <Route exact path="/turmas/:id/pdfreceita" component={PdfTodasReceita} />
      <PrivateRoute exact path="/turma/adicionar" component={CreateClassroom} />
      <Route path="/*" component={NotFoundPage} />

      <PrivateRoute exact path="/relatorios" component={Report} />
    </Switch>
  </HashRouter>
);

export default Routes;
