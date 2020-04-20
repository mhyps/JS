import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
    },
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    return this.servers.find((server) => server.id === id);
  }

  getServerName(id: number): string {
    return this.servers.find((server) => server.id === id).name;
  }

  updateServer(id: number, newServer: { name: string; status: string }) {
    const newItem = {
      id: id,
      name: newServer.name,
      status: newServer.status,
    };
    this.servers[id - 1] = newItem;
  }

  constructor() {}
}
