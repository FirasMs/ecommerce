import React from "react";
import Card from "react-bootstrap/Card";

const Login = () => {
  return (
    <Card style={{ width: "30rem", "margin-left": 450 }}>
      <Card.Body
        style={{
          backgroundImage: `url("https://img.freepik.com/free-vector/gradient-background-vector-spring-colors_53876-117271.jpg?fit=crop&w=240&h=130?auto=format&fit=crop&w=480&h=260")`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <Card.Title></Card.Title>
        <Card.Text>
          <div class="container">
            <ul
              class="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="tab-login"
                  data-mdb-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="tab-register"
                  data-mdb-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >
                  Register
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form>
                  <div class="text-center mb-3">
                    <p>
                      <b>Sign in with:</b>
                    </p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>

                  <p class="text-center">
                    <b>or:</b>
                  </p>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="loginName">
                      Email or username
                    </label>
                    <input type="email" id="loginName" class="form-control" />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="loginPassword">
                      Password
                    </label>
                    <input
                      type="password"
                      id="loginPassword"
                      class="form-control"
                    />
                  </div>

                  <div class="row mb-4">
                    <div class="col-md-6 d-flex justify-content-center">
                      <div class="form-check mb-3 mb-md-0"></div>
                    </div>

                    <div class="col-md-6 d-flex justify-content-center">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign in
                  </button>

                  <div class="text-center">
                    <p>
                      Not a member? <a href="/signup">Register</a>
                    </p>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <form>
                  <div class="text-center mb-3">
                    <p>Sign up with:</p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>

                  <p class="text-center">or:</p>

                  <div class="form-outline mb-4">
                    <input type="text" id="registerName" class="form-control" />
                    <label class="form-label" for="registerName">
                      Name
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="registerUsername"
                      class="form-control"
                    />
                    <label class="form-label" for="registerUsername">
                      Username
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="registerEmail"
                      class="form-control"
                    />
                    <label class="form-label" for="registerEmail">
                      Email
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="registerPassword"
                      class="form-control"
                    />
                    <label class="form-label" for="registerPassword">
                      Password
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="registerRepeatPassword"
                      class="form-control"
                    />
                    <label class="form-label" for="registerRepeatPassword">
                      Repeat password
                    </label>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-4">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="registerCheck"
                      checked
                      aria-describedby="registerCheckHelpText"
                    />
                    <label class="form-check-label" for="registerCheck">
                      I have read and agree to the terms
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-3">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Login;
