// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Article } from 'path/to/interfaces';

export type Article = {
  id: number;
  name: string;
  title: string;
  category: string;
  tags: string;
  author: string;
  assets: string[]; //contains “images” & “videos” as ARRAYS
  content: string;
  template_id: number;
};
