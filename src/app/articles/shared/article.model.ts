export class Article {
  _id: string;
  title: string;
  author: string;
  time: Date;
  description: string;
  content: string;
  like: number;
  tags: string[];
  comments: string[]; // TODO - refactor to array of class later
}
