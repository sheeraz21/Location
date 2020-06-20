import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {LocationInfoDTO} from '../classes/location-info-dto'
import { QuestionService } from '../services/locationInfo.service';


@Component({
  selector: 'app-location-info',
  templateUrl: './location-info.component.html',
  styleUrls: ['./location-info.component.css']
})
export class LocationInfoComponent implements OnInit {
  private questionDTO=new LocationInfoDTO();
  constructor(private service:QuestionService) { }
  ngOnInit() {
  }

  form = new FormGroup({  
    countryCode: new FormControl('' , Validators.required),  
    stateCode : new FormControl('' , Validators.required),  
    cityCode : new FormControl('' , Validators.required),  
  
});  

QuestionForm(QuestionInformation)  
{  
 this.questionDTO.contryCode=this.countryCode.value;
  this.questionDTO.stateCode=this.stateCode.value;
  this.questionDTO.cityCode=this.cityCode.value;
  //console.log(this.questionDTO);
  this.service.saveQuestion(this.questionDTO).subscribe(response=>{
response.value;
    console.log(response)

  }
  );
  }
get countryCode(){  
  return this.form.get('countryCode');  
}  

get stateCode(){  
    return this.form.get('stateCode');  
}  

get cityCode(){  
    return this.form.get('cityCode');  
} 

}
