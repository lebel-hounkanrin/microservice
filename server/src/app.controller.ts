import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
 
  @MessagePattern("notification_channel")
  getNotification(@Payload() data): string {
   console.log(data);
   return `I got message from Client : ${data}`;
  }
}
