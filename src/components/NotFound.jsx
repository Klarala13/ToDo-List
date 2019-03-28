import React from "react";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "Error 404 | What to do?";
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-warning">
          <strong>
            Ooops .... sorry!<br />
          </strong>
         Error 404 - The requested page could not be found.
        </div>
      </div>
    );
  }
}

export default NotFound;