import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-editserver',
  templateUrl: './editserver.component.html',
  styleUrls: ['./editserver.component.scss'],
})
export class EditserverComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private activeRoute: ActivatedRoute,
    private serverService: ServerService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.activeRoute.params.subscribe((params: Params) => {
    //   this.server = this.serverService.getServer(+params['id']);
    // });

    this.activeRoute.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }

  updateServer(newName: string, newStatus: string) {
    this.serverService.updateServer(this.server.id, {
      name: newName,
      status: newStatus,
    });
    this.router.navigate(['servers']);
  }
}
