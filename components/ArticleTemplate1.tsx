import { Article } from "../interfaces";
import { Box, Flex,Heading,Text,HStack,Button,VStack} from '@chakra-ui/react'

type ListDetailProps = {
  item: Article;
};

const Title = ({ title ,category,author,tags} ) => (
  <VStack  bg='#294034' w='full' py='58px' px='280px' borderRadius='8 0 0 8' alignItems='left' > 
    <Button bg='transparent' p='4px' borderRadius='100' opacity='30%' w='40px' h='40px'>
    <svg  width="24" height="24" viewBox="0 0 24 24"><path fill="#0000" d="M0 0h24v24H0z"/><path d="m10.828 12 4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/></svg>
    </Button>
    <Heading as='h1' fontSize ='32px'  fontWeight ='medium' color='white' maxW='700px'>{title}  </Heading>
    <HStack spacing='24px'>
    <Text>category</Text>
    <Text> author</Text>
    <Text>tags</Text>
   </HStack>
  </VStack>
);

const ArticleTemplate1 = ({ item: article }: ListDetailProps) => (
  <Box as='section' m='24px' borderRadius='8' overflow='hidden'>
   <Title title={article.title} author= {article.author} category={article.category} tags={article.tags} />
    <h1>Detail for {article.title} by template 1</h1>
    <p>ID: {article.id}</p>
  </Box>
);

export default ArticleTemplate1;
