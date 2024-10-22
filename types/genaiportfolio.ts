export type Author = {
    name: string;
    image: string;
    bio?: string;
    _id?: number | string;
    _ref?: number | string;
  };
  
  export type Portfolio = {
    _id: number;
    title?: string;
    slug?: any;
    // tag:string;
    metadata?: string;
    body?: string;
    mainImage?: any;
    author?: Author;
    publishedAt?: string;
  };
   