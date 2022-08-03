function AllData(){
    const [show, setShow]     = React.useState(true);
    const [data, setData] = React.useState('');
    const [user, setUser]     = React.useState('');
    const [balance, setBalance] = React.useState('');

    React.useEffect(() => {
        // Fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                props.setStatus('')
                props.setShow(false)
                setData(JSON.stringify(data));
            });
    }, []);
   
    return(
        <Card
           bgcolor="dark"
           header="Login"
           body={show ? 
           <AllDataForm setShow={setShow} setStatus={setStatus} setUser={setUser} /> :
           <AllDataMsg setShow={setShow} setStatus={setStatus} user={user}/>}
        />
    )

    function AllDataMsg(props){
        const bankUser = props.user.email;
           return(
           <div>
               <h5>{` User:  ${bankUser} `}</h5>
               <br></br>
               <h5>{`Bank balance: ${balance}`}</h5>
              
           </div>);
       }
