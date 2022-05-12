class person{
    constructor(f_name, L_name, email, U_name, Pswd){
        this.f_name = f_name;
        this.L_name = L_name;
        this.U_name = U_name;
        this.Pswd = Pswd;
        this.Pswd = Pswd;
        this.dob = dob;
    }
}

var personArray = [];

function  Register(){
    var f_name = document.getElementById('f_name').value;
    var l_name = document.getElementById('l_name').value;
    var U_name = document.getElementById('u_name').value;
    var Pswd = document.getElementById('pswd').value;
    var dob = document.getElementById('dob').value;

    let usr = new person(f_name, l_name, U_name, Pswd, dob);
    
    this.personArray.push(usr);
   
    alert(U_name+' user created');
      
    window.localStorage.setItem("globalObject", JSON.stringify(this.personArray));
    window.location.href = "shop.html";
 }