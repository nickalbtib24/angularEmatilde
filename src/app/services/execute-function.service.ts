import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Injectable({
  providedIn: 'root'
})
export class ExecuteFunctionService {

  invokeNavbarComponentFunction = new EventEmitter();
  invokeLogInComponentMessage = new EventEmitter();
  subsVar: Subscription;
  constructor() { }

  public onFirstComponentButtonClick() {
    this.invokeNavbarComponentFunction.emit();
  }

  public sendSuccessMessageToLogIn() {
    this.invokeLogInComponentMessage.emit();
  }

}
