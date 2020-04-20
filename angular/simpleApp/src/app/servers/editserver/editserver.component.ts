import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-editserver',
  templateUrl: './editserver.component.html',
  styleUrls: ['./editserver.component.scss'],
})
export class EditserverComponent implements OnInit {
  // server: { id: number; name: string; status: string };
  serverId: number;
  serverName: string;
  serverStatus: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private serverService: ServerService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.serverId = params['id'];
      this.serverName = this.serverService.getServerName(params['id']);
    });
  }

  updateServer() {
    this.serverService.updateServer(this.serverId, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
