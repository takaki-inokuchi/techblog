export type Qiita = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  thumbnail: string;
  content: string;
};

export type QiitaItmes = {
  id: string;
  title: string;
  url: string;
  created_at: string;
  thumbnail: string;
  body: string;
};

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  createdAt:string;
  mainImage?: {
    url: string;
    width: number;
    height: number;
  };
};