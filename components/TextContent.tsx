import {Text} from '@chakra-ui/react'


const TextContent = ({children,textColor}) => (
      <Text my='52px' lineHeight='190%' color={textColor} >{children}</Text>
  );
  
  export default TextContent;
  