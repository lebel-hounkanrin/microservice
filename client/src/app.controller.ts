import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
  @Inject("MQTT_SERVICE") private client: ClientProxy
  ){}

  @Get("notifications") 
  getNotifications(){
    return this.client.send('notification_channel', "It's a message from a Client")
  }
}