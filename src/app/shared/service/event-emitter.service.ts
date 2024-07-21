import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventEmitterService {
  private dataSubject = new Subject<any>();
  constructor() {}

  saveEvent(data: any) {
    this.dataSubject.next(data);
  }

  returnEvent() {
    return this.dataSubject.asObservable();
  }
}
