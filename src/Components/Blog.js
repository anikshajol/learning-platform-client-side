import React from "react";

const Blog = () => {
  return (
    <div>
      <section>
        <div className="p-5">
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold capitalize">What is Cors?</h2>
            <p className="text-lg mt-6">
              Cross-origin resource sharing (CORS) is a browser security feature
              that restricts cross-origin HTTP requests that are initiated from
              scripts running in the browser. If your REST API's resources
              receive non-simple cross-origin HTTP requests, you need to enable
              CORS support.
            </p>
          </section>
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold capitalize">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p className="text-lg mt-6">
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
            </p>
            <h3 className="text-lg font-bold">Other Options:</h3>
            <ul>
              <li>On this page.</li>
              <li>Add and initialize the Authentication SDK.</li>
              <li>Sign up new users.</li>
              <li>Sign in existing users.</li>
              <li>Set an authentication state observer and get user data.</li>
              <li>Next steps.</li>
            </ul>
          </section>

          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold">
              How does the private route work?
            </h2>
            <p className="text-lg mt-6">
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </section>
          <section className=" container mx-auto mt-6">
            <h2 className="text-2xl font-bold">
              What is Node? How does Node work?
            </h2>
            <p className="text-lg mt-6">
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Blog;
