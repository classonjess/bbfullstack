function NavBar(){
    return(
<nav className="navbar navbar-expand-lg bg-dark">
    <a className="navbar-brand" href="#">BadBank</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#NavBar" aria-controls="NavBar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-centre" id="NavBar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/login/">Login</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" href="#/deposit/">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/">Withdraw</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/balance/">Balance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/allData/">AllData</a>
        </li>
       </ul>
    </div>
    {props.user && props.user.email}
  </nav>
 );
}