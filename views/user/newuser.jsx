var React = require("react");
var Default = require('../layout/default-login');

class NewUser extends React.Component {
  render() {
    return (


        <Default title="Welcome, New User!">
        <div className="main-body">
        <h2>WELCOME, NEW USER.</h2>
            <p>Sign up for a new account!</p>
            <div className="form-div">
              <form className="user-form" method="POST" action="/users/int">
                <div className="user-attribute">
                  <label>Username</label><input className="field" name="username" type="text" required="required" />
                </div>
                <div className="user-attribute">
                  <label>Name</label><input className="field" name="name" type="text" required="required" />
                </div>
                <div className="user-attribute">
                  <label for="level-list">Permission Level</label>
                    <select className="select-level" name="level">
                      <option value="1">1 - Supervisor</option>
                      <option value="2">2 - Chemist</option>
                      <option value="3">3 - Technician</option>
                    </select>
                </div>
                <div className="user-attribute">
                  <label>Password</label><input className="field" name="password" type="password" required="required" />
                </div>
                <input name="submit" type="submit" />
              </form>
            </div>
        </div>
        </Default>
    );
  }
}

module.exports = NewUser;
