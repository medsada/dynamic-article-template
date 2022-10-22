import { Article } from "../interfaces";
import { Box,VStack} from '@chakra-ui/react'
import Galery from "./Galery";
import Title2 from "./Title2";
import TextContent from './TextContent';
import Image from 'next/image'
import Presentation from './Presentation'

type ListDetailProps = {
  item: Article;
};

const ArticleTemplate2 = ({ item: article }: ListDetailProps) => (
  <VStack as='section' bg='#EEF1FF' alignItems='center' m="0" py='100px' px='32px' > 
    <Box maxW='600px'>  
    <Title2 title={article.title}  />
    <Box w='full' h='300px' position="relative" borderRadius='10' overflow='hidden' >
    <Image
      alt='Mountains'
      src={article.assets[0]} 
      layout="fill"
      objectFit="cover" />
    </Box>
    <Presentation author= {article.author} category={article.category} tags={article.tags} />
    <Galery img1Src= {article.assets[1]} img2Src= {article.assets[2]} />
  <TextContent textColor='#171717'>{article.content}</TextContent>
  </Box>
  </VStack>
);

export default ArticleTemplate2;
