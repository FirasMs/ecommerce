import React from "react";
import Card from "react-bootstrap/Card";

const Signup = () => {
  return (
    <Card style={{ width: "30rem", "margin-left": 450 }}>
      <Card.Body
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1L2RjpzQZs_gwwYdJesJn5XbDF3dmqil-wEn4a1MI7FhQbicvcGRHEpd3aukc8i3vGII&usqp=CAU")`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <Card.Title style={{ "margin-left": 160 }}>
          <b>Signup</b>
        </Card.Title>
        <Card.Text>
          <div class="container">
            <ul
              class="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            ></ul>
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
                      <b>create Account:</b>
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

                  <div class="form-outline mb-4">
                    <label class="form-label" for="loginName">
                      username
                    </label>
                    <input type="email" id="loginName" class="form-control" />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="loginName">
                      Email
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

                  <div class="form-outline mb-4">
                    <label class="form-label" for="loginPassword">
                      Repeat Password
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

                    <div class="col-md-6 d-flex justify-content-center"></div>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>

                  <div class="text-center">
                    <p>
                      your are a member? <a href="/Login">login</a>
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

export default Signup;
