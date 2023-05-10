import {
    Box,
    Image,
    Text,
    Heading,
    Link,
    Button,
    Spacer
} from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function BusinessCard() {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        color='#fff'
        h='100vh'
        >
        <Box
          bgColor='#23252C'
          w='550px'
          h='868px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          >
            <Box
              bg='#1A1B21'
              w='317'
              h='780'
              borderRadius='10'
            >
              <VStack>
              <Image borderTopRadius='10' maxW='317' h='317' justifySelf='center' src='https://bit.ly/dan-abramov'
              mb='21' />

              
              <Heading fontSize='25'>Dan Abrahmov</Heading>
              <Text color='#F3BF99' fontSize='12.8'>Frontend Developer</Text>
              <Link fontSize='10.24'>danabrahmov.website</Link>
              <HStack justifyContent='space-between' w='80%'>
                <Button minW='115' h='34' color='#374151' leftIcon={<MdEmail/>}>Email</Button>
                <Button minW='115' h='34' color='#fff' bgColor='#5093E2' leftIcon={<FaLinkedin/>} >LinkedIn</Button>
              </HStack>
              <Spacer />
              <Spacer />
              <Box w='80%'>
                <Heading mb='5px' color='#F5F5F5' fontSize={'16px'} textAlign='left'>About</Heading>
                <Text mb='27px' fontSize={'11px'} maxW='247px'>
                  I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </Text>

                <Heading mb='5px' color='#F5F5F5' fontSize={'16px'} textAlign='left'>Interests</Heading>
                <Text fontSize={'11px'} maxW='247' mb='27px'>
                  Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </Text>
              </Box>
              </VStack>
              
              <Box borderBottomRadius='10px' width={'100%'} h='64px' display='flex'gap='23.5px' alignItems='center' justifyContent='center' bg='#161619'>
                  <Link><FaTwitterSquare /></Link>
                  <Link><FaFacebookSquare /></Link>
                  <Link><FaInstagramSquare /></Link>
                  <Link><FaGithubSquare /></Link>
              </Box>
            </Box>
        </Box>
      </Box>
    )
}