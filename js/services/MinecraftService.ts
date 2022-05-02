import axios from 'axios'
import { ServerStatus } from '../entities/Minecraft/ServerStatus';

export default class MinecraftService {
   async getServerStatus(address: string, port: string): Promise<ServerStatus> {
      return (await axios.get<ServerStatus>(`https://mcapi.us/server/status?ip=${address}&port=${port}`)).data;
   }
}