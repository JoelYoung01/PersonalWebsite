export interface ServerStatus {
   status: string;
   online: boolean;
   motd: string;
   error: any;
   favicon: any;
   players: Players;
   server: Server;
   last_updated: string;
   last_online: string;
   duration: string;
}

export interface Players {
   max: number;
   now: number;
}

export interface Server {
   name: string;
   protocol: number;
}