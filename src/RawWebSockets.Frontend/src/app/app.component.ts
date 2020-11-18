import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const connectionUrl:string = "wss://localhost:44358/ws"; 

    const socket = new WebSocket(connectionUrl);

    socket.onopen = function (event) {

    };

    socket.onclose = function (event)  {
    }

    socket.onmessage = function (event) {
      console.log(event.data);
    };

    function htmlEscape(str) {
      return str.toString()
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
    }

    setTimeout(() => {
      socket.send("hi");
    },1000);
  }
  
}
