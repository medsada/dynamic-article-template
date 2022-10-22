import { Article } from "../interfaces";

/** Dummy user data. */
export const sampleUserData: Article[] = [
  {
    id: 1,
    name: "Alice",
    title: "Insights about my personal and work life, and the in-betweens",
    category: "Nature",
    tags: "Mountains",
    author: "lee robonsion",
    assets: [ "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2174&q=80"], //contains “images” & “videos” as ARRAYS
    content: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text 
    of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`,
    template_id: 1,
  },
  {
    id: 2,
    name: "kadour",
    title: "Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August",
    category: "High tech",
    tags: "Smartphone, Apple",
    author: "lee robinson",
    assets: ["https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"], //contains “images” & “videos” as ARRAYS
    content:
    `What is Lorem Ipsum? Lorem Ipsum is simply dummy text 
    of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum. What is Lorem Ipsum? Lorem Ipsum is simply dummy text 
    of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`,
    template_id: 2,
  },
  {
    id: 3,
    name: "Bob",
    title: "Russian Attack",
    category: "Politics",
    tags: "war",
    author: "journalist_2",
    assets: ["https://images.unsplash.com/photo-1657299170240-a1f811379b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"], //contains “images” & “videos” as ARRAYS
    content:
      "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    template_id: 1,
  },
];
