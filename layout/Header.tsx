import Link from "next/link";
import { Flex, Button ,HStack} from '@chakra-ui/react'

const Header = () => (
  <header>
    <Flex as="nav" justify='space-between' bg="#171717" color='gray.50' px="32px" w="100%" m="0" py="32px" align='center'>
      <Link href="/">
        <a>Media Company</a>
      </Link>
     <HStack  spacing='32px'>
     <Link href="/articles">
        <a>Articles List</a>
      </Link>
      <Link href="/">
        <a>About us</a>
      </Link>
     </HStack>
     <Button color='gray.50' bg='transparent' border='1px'   _hover={{ bg: 'gray.50', color:'#171717' }}
>
      Subscribe
     </Button>   </Flex>
  </header>
);

export default Header;
