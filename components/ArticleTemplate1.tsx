import { Article } from "../interfaces";
import { Box,VStack} from '@chakra-ui/react'
import Image from 'next/image'
import Title1 from "./Title1";
import TextContent from './TextContent';

type ListDetailProps = {
  item: Article;
};

const ArticleTemplate1 = ({ item: article }: ListDetailProps) => (
  <VStack as='section' mx='32px' my='24px' borderRadius='8' overflow='hidden' spacing='0' >
  <Title1 title={article.title} author= {article.author} category={article.category} tags={article.tags} />
  <Box w='full' h='400px' position="relative" >
  <Image
      alt='Mountains'
      src={article.assets[0]} 
      layout="fill"
      objectFit="cover" />
  </Box>
  <Box maxW='660px'>    
  <TextContent textColor='#00000' >{article.content}</TextContent>
  </Box>
  </VStack>
);

export default ArticleTemplate1;
