class User {
    save() {}
  }
  
  const isLoggedIn = true;
  
  const user = new User();
  user.save();
  
  if (isLoggedIn) {

  }




  //prefer this
  const admin = new Admin();


  //instead 
  const adm = new AdmUser(); 