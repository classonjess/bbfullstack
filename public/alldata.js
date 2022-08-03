function AllData(){
    const [show, setShow]     = React.useState(true);
    const [data, setData] = React.useState('');
    const [user, setUser]     = React.useState('');
    const [balance, setBalance] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        // Fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                ctx.user = data[0];
                setBalance(data[0].balance);
                props.setStatus('')
                props.setShow(false)
                setData(JSON.stringify(data));
            });
    }, []);
   
        return (
            <div>
                <p> {user.name}</p>
                <p>{ctx.user.balance}</p>
            <h5> Account members data</h5>
            {data}
            </div>);
    }
    