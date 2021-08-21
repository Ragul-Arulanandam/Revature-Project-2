import { Component, OnInit, ViewChild} from '@angular/core';
import { LoginService } from '../login.service';
import { RecipeFormService } from '../recipe-form.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("loginform") loginValue :  any
  @ViewChild("registerform") registerValue :  any

  

  constructor(private loginService:LoginService,private registerService:RegisterService,private recipeService:RecipeFormService) {}
  
  myToken:any;
  
  ngOnInit(): void {
  }


  OnSubmit(loginData:any){
    console.log(loginData);

    this.loginService.login(loginData).subscribe(
      (token:any)=>{
        console.log(token);
       let t= JSON.stringify(token);
        this.myToken="Bearer "+token.jwt;
        console.log(this.myToken);
        this.recipeService.token=this.myToken;
        console.log(this.myToken);
        

      }
    );
    this.loginValue.reset('')

  }
  onSubmit(registerData:any){
    console.log(registerData)
    console.log("Regiestered Succesufully")

    this.registerValue.reset('')
  }
  isShow = false
  showForm(){
    console.log("Displayed")
    this.isShow = !this.isShow;
  }
  

}
