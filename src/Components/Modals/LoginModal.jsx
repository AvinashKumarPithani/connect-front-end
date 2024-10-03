import { Box, Button, Center,Flex,  Heading, Image, VStack , Grid } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

const LoginModal = () => {

const loginModalDisplay = useSelector((state) => state.slice.LoginModalDisplay);
const googleSignInPageUrl = import.meta.env.VITE_GOOGLE_SIGNIN_PAGE;

const parentStyle = {
    backgroundColor :'rgb(0, 0, 0,0.3)',
    h :'100vh',
    position :'absolute',
    top:"0%",
    w :'100%',
    justifyContent : "center",
    alignItems : "center",
    display:loginModalDisplay
}

  return (
   <Flex sx={parentStyle}>
     <Center h="100%" w='100%' bg='white'>
    <VStack spacing='40px'>
     <Heading fontFamily='sans-serif' fontSize={30} color='#40679E'>UniConn</Heading>
      <Grid fontFamily='sans-serif' rowGap={8} fontSize={23} fontWeight='400' color='grey' textAlign='center'>
        <p>Platform That Makes Booking One to One session </p>
        <p>Anywhere in the World Easy!</p>
      </Grid>
      <Button
      cursor='pointer'
        gap='40px'
        fontSize={19}
        display='flex'
        justifyContent='space-between'
        borderRadius={10}
        border='none'
        pr={50}
        leftIcon={
          <Image
            boxSize="50px"
            borderBottomLeftRadius={10}
            borderTopLeftRadius={10}
            src="data:image/png;base64,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"
            alt="Google Logo"
          />
        }
        bg="#4285F4"
        color="white"
        _hover={{ bg: '#357ae8' }}
        // eslint-disable-next-line no-undef
        onClick={()=>window.location.href = googleSignInPageUrl}
      >
       Continue With Google
      </Button>
    </VStack>
    </Center>
   </Flex>
  )
}

export default LoginModal; 