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
   
    return (
        <div>
        <h5> Account members data</h5>
        {user.email}
        {user.balance}
        </div>);
}
