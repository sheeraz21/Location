import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';  
import{LocationInfoDTO} from '../classes/location-info-dto';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private  baseUrl = "http://localhost:8080/app/v1/";
  constructor(private http: HttpClient) { }

  saveQuestion(LocationInfokDTO:LocationInfoDTO) : Observable<any>  
  {  
      let url = this.baseUrl + "location/post";  
      return this.http.post(url,LocationInfokDTO);  
  } 

}
