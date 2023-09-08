import React, { Suspense, lazy } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import NotFoundPage from "./components/Layouts/NotFoundPage";
import CircularLoading from "./components/Loading/CircularLoading";
import { Classroom, ClassroomForm } from "./containers/Classroom";
import CreateClassroom from "./containers/Classroom/AddClassroom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import FormRegistration from "./containers/Registration/FormRegistration/FormRegistration";
import ReMatricula from "./containers/Registration/ReMatricula";
import { isAuthenticated } from "./services/auth";
import FormOphthalmological from "./containers/Classroom/Registration/FormOphthalmological/FormOphthalmological";

//const Home = lazy(() => import("./containers/Home"));
const Schedule = lazy(() => import("./containers/Schedule/Schedule"));
const ScheduleForm = lazy(() => import("./containers/Schedule/ScheduleForm"));

const School = lazy(() => import("./containers/School/School"));
const SchoolClassrooms = lazy(() =>
  import("./containers/School/SchoolClassrooms")
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
      <Route path="/matricula/:id" exact component={ReMatricula} />
      <PrivateRoute exact path="/" component={Schedule} />
      <PrivateRoute exact path="/cronograma" component={Schedule} />
      <PrivateRoute
        exact
        path="/cronograma/adicionar"
        component={ScheduleForm}
      />
      <PrivateRoute
        exact
        path="/cronograma/editar/:id"
        component={ScheduleForm}
      />
      <PrivateRoute exact path="/escolas" component={School} />
      <PrivateRoute exact path="/escolas/:id" component={SchoolClassrooms} />

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

      <PrivateRoute exact path="/turma/adicionar" component={CreateClassroom} />
      <Route path="/*" component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
