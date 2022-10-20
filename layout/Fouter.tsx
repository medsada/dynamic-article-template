import { Flex, Text ,HStack} from '@chakra-ui/react'
import Link from "next/link";

const Footer = () => (
   <Flex as="footer" justify='space-between' bg="#171717" color='gray.50' px="32px" w="100%" m="0" py="32px" align='center'>
   <Text>
   © Media News, 2022
   </Text>
  <HStack  spacing='32px'>
  <Link href="/articles">
     <a>Privacy Policy</a>
   </Link>
   <Link href="/">
     <a>Terms of Service</a>
   </Link>
  </HStack>
 </Flex>
);

export default Footer;
