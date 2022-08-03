function AllData(){
  const ctx = React.useContext(UserContext);
      
    return (
      <Card
        bgcolor="dark"
        header="Account Information"
        body={
          <>
           <p>Name: {JSON.stringify(ctx.user[0].name)}</p>
           <p>Email: {JSON.stringify(ctx.user[0].email)}</p>
           <p>Balance: ${JSON.stringify(ctx.user[0].balance)}</p>
         </>
             }
          />
        );
      }
      
    