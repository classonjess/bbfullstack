function AllData(props){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    const [user, setUser]     = React.useState('');
    const [balance, setBalance] = React.useState('');
  
    return (
      <Card
        bgcolor='dark'
        header='Account information'
        status={status}
        body={
          show ? (
            <>
              <AllDataForm
                user={props.user}
                setShow={setShow}
                setStatus={setStatus}
                setBalance={setBalance}
              />
            </>
          ) : (
            <>
              {' '}
              <AllDataMsg setShow={setShow} setStatus={setStatus} />
              <p>{email}</p>
              <p>Your current BadBank account balance is ${balance}</p>
            </>
          )
        }
      />
    )
  }
  
  function AllDataMsg(props) {
    return (
      <>
  
      </>
    )
  }
  
  function AllDataForm(props){
    const [email, setEmail]   = React.useState('');
    const [balance, setBalance] = React.useState(0);  
    const ctx = React.useContext(UserContext);
    const user = ctx.user;
    
      function handle(){
      console.log(email,balance);
      fetch(`/account/findOne/${email}`)
      .then(response => response.text())
      .then(text => {
          try {
            const data = JSON.parse(text)
            props.setStatus('')
            props.setShow(false)
            props.setBalance(data.balance)
            console.log('JSON:', data)
          } catch(err) {
            props.setStatus(text)
              console.log('err:', text);
          }
      });
    }
 }