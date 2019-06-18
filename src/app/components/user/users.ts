export interface User {
  id: number;
  total_count: number;
  login: string;
  url: string;
  score: number;
  followers_url?: string;
  repos_url?: string;
  organizations_url?:string;
  subscriptions_url?:string;
  
}