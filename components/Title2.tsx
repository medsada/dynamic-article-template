import { Box, Flex,Heading,Text,HStack,Button,VStack,Container} from '@chakra-ui/react'
import Link from "next/link";


const Title2 = ({ title } ) => (
    <VStack  w='full'  alignItems='start' spacing='24px' my='24px'> 
       <Button>
       <Link href="/articles">
          <a>Return</a>
        </Link>
       </Button>    
      <Heading as='h2' fontSize ='32px'  fontWeight ='bold' color='#363062'>{title}</Heading>
    </VStack>
  );


  export default Title2;
