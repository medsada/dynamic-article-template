import { Heading,Text,VStack,HStack} from '@chakra-ui/react'
import Link from "next/link";


const Title1 = ({ title ,category,author,tags} ) => (
    <VStack  bg='#294034' w='full' px={['24px','24px','280p']} py='58px' borderRadius='8 0 0 8' alignItems='left' spacing='24px'> 
  
        <Link href="/articles" >
          <a>Return</a>
        </Link>
      <Heading as='h2' fontSize ='32px'fontWeight ='bold' color='white' maxW='700px'>{title}</Heading>
      <HStack spacing='32px'>
      <Text color='gray.50' fontFamily='Inter'>{category}</Text>
      <Text color='gray.50' fontFamily='Inter'>{author}</Text>
      <Text color='gray.50' fontFamily='Inter'>{tags}</Text>
     </HStack>
    </VStack>
  );

  export default Title1;
