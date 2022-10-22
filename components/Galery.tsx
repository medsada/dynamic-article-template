import Image from 'next/image';
import { HStack,Container,Flex} from '@chakra-ui/react'


const Galery = ( {img1Src,img2Src}) => (
    <Flex position='relative'   flexWrap= 'wrap' gap='4' justifyContent='space between'> 
    <Container w='250px' h='250px' position="relative" borderRadius='10' overflow='hidden' >
    <Image
      alt='Mountains'
      src={img1Src} 
      layout="fill"
      objectFit="cover" />
    </Container>
    <Container w='250px' h='250px' position="relative" borderRadius='10' overflow='hidden' >
    <Image
      alt='Mountains'
      src={img2Src} 
      layout="fill"
      objectFit="cover" />
    </Container>
    </Flex>
  );
  
  export default Galery;