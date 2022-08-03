function AllData(){
  const ctx = React.useContext(UserContext);
      
    return (
      <Card
        bgcolor="dark"
        header="Account Information"
        body={
          <>
           <p>Name: {JSON.stringify(ctx.users.name)}</p>
           <p>Email: {JSON.stringify(ctx.users.email)}</p>
           <p>Balance: ${JSON.stringify(ctx.users.balance)}</p>
         </>
             }
          />
        );
      }
      
    