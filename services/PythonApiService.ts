import axios, { AxiosInstance } from 'axios';

export default class PythonApiService {
   readonly client: AxiosInstance;
   constructor(baseURL: string) {
      this.client = axios.create({
         baseURL,
         timeout: 1000
      });
   }
   
   /**
    * Hits the python api to get its version and make sure it can talk
    * @returns Version of python api
    */
   async testApi(): Promise<string>{
      console.log(process.env);
      let result = await this.client.get('/version')
      return result.data
   }
}