import React, { Suspense, lazy } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import NotFoundPage from "./components/Layouts/NotFoundPage";
import CircularLoading from "./components/Loading/CircularLoading";
import { Classroom, ClassroomForm } from "./containers/Classroom";
import CreateClassroom from "./containers/Classroom/AddClassroom";
import FormOphthalmological from "./containers/Classroom/Registration/FormOphthalmological/FormOphthalmological";
import Login from "./containers/Login";
import Register from "./containers/Register";
import FormRegistration from "./containers/Registration/FormRegistration/FormRegistration";
import { isAuthenticated } from "./services/auth";
import PdfPrioridade from "./Pdf/PdfPrioridade";

//const Home = lazy(() => import("./containers/Home"));

const School = lazy(() => import("./containers/School/School"));
const SchoolClassrooms = lazy(() =>
  import("./containers/School/SchoolClassrooms")
);

const SchoolCreate = lazy(() =>
  import("./containers/School/SchoolCreate")
);


const RegistrationClassroom = lazy(() =>
  import("./containers/Classroom/Registration/Registration")
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <MainLayout>
          <Suspense fallback={<CircularLoading />}>
            <Component {...props} />
          </Suspense>
        </MainLayout>
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
      <PrivateRoute exact path="/escolas" component={School} />
      <PrivateRoute exact path="/escolas/:id" component={SchoolClassrooms} />
      <PrivateRoute exact path="/criar/escolas" component={SchoolCreate} />
      <PrivateRoute exact path="/turmas" component={Classroom} />

      <PrivateRoute
        exact
        path="/turmas/:id/matricula/:idRegistration"
        component={RegistrationClassroom}
      />

      <PrivateRoute
        exact
        path="/turmas/:id/matricula/:idRegistration/form"
        component={FormOphthalmological}
      />
      <PrivateRoute exact path="/turmas/:id" component={ClassroomForm} />
      <PrivateRoute
        exact
        path="/turmas/:id/matricula/:idRegistration"
        component={RegistrationClassroom}
      />
      <Route
        exact
        path="/turmas/:id/pdf"
        component={PdfPrioridade}
      />
      <PrivateRoute exact path="/turma/adicionar" component={CreateClassroom} />
      <Route path="/*" component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
