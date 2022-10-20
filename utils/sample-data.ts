import { Article } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: Article[] = [
  {
    id: 1,
    name: "Alice",
    title: "Insights about my personal and work life, and the in-betweens",
    category: "sport",
    tags: "foot",
    author: "journalist_1",
    assets: ["jhfkjs", "dsfdbvn"], //contains “images” & “videos” as ARRAYS
    content:
      "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    template_id: 1,
  },
  {
    id: 2,
    name: "kadour",
    title: "IPHONE 11",
    category: "HIGH TECH",
    tags: "Smartphone, Apple",
    author: "journalist_3",
    assets: ["jhfkjs", "dsfdbvn", "hhhiojo", "uhiuds"], //contains “images” & “videos” as ARRAYS
    content:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    template_id: 2,
  },
  {
    id: 3,
    name: "Bob",
    title: "Russian Attack",
    category: "Politics",
    tags: "war",
    author: "journalist_2",
    assets: ["jhfkjs", "dsfdbvn"], //contains “images” & “videos” as ARRAYS
    content:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    template_id: 1,
  },
];
