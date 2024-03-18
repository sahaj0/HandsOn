import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
   
  // Implement logic here for basic logging functions of log,error,warn and info.
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARN]: ${message}`);
  }

  info(message: string): void {
    console.info(`[INFO]: ${message}`);
  }
}