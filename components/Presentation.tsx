import {Text,Heading,VStack} from '@chakra-ui/react'


const Presentation = ({ category,author,tags} ) => (
    <VStack spacing='32px' alignItems='self-start' my='32px'>
    <Heading as='h3' color='#171717' fontFamily='Inter' fontSize='16px'>Category : <Text fontWeight='medium' display='inline'> {category} </Text></Heading>
    <Heading as='h3' color='#171717' fontFamily='Inter' fontSize='16px'> Authos : <Text fontWeight='medium' display='inline'> {author}</Text></Heading>
    <Heading  as='h3'color='#171717' fontFamily='Inter' fontSize='16px'> Tags :  <Text fontWeight='medium'  display='inline'>{tags}</Text> </Heading>
   </VStack>

);
export default Presentation;
