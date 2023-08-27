import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18nSelect Pipe
  public name: string = 'Oscar';
  public gender: 'male' | 'female' = 'male';
  public invitationMap ={
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Leidy';
    this.gender = 'female';
  }

  //i18nPlural Pipe

  public clients: string[] = ['Maria', 'Pedro', 'Leidy', 'Hernando','Eduardo', 'Melissa',];
  public clientsMap ={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person ={
    name: 'Leidy',
    Age: 28,
    Address: 'Medellín, Colombia'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log ('tap:',value)),
  );

  public promiseValue: Promise<string> = new Promise ((resolve,reject) =>{
    setTimeout(() => {
      resolve ('Tenemos data en la promesa');
      console.log ('Tenemos data en la promesa');
      this.person.name = 'Otro nombre'
    }, 3500);
  })
  
}
