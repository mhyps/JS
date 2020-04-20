import { Component, OnInit } from '@angular/core';
import { ServerService } from './server.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServerService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onEdit(id: number) {
    this.router.navigate([id, 'edit'], { relativeTo: this.activeRoute });
  }
}
