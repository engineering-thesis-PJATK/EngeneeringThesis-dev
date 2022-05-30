import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ReponseModel } from 'src/app/models/reponse';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    let response: ReponseModel = (error.error as ReponseModel);
    if(response.messageContent == undefined)
    {
      response.messageContent = 'Something bad happend; please try again later.';
    }
    
    console.error(
      `Name: ${error.name} \n`+
      `Message: ${error} \n`+
      `Status code: ${error.status} \n`+
      `error: ${error.error} \n`
    );
    Swal.fire({
      title: 'Oops...',
      // icon: 'error',
      imageUrl: 'https://media2.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif',
      text: `Something went wrong! error: ${response.messageContent}`,
      footer: `${error.status}`
    });
    return throwError(() => new Error('Something bad happend; please try again later.'));
  }
}