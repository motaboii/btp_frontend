// import React from 'react';
// import './fullpolicy.css';
// import UserNavbar from './OrgNavbar';
// import Footer from './Footer';

// const FullPolicy = () => {
//   return (
//     <>
//    <UserNavbar/>

//     <div className="full-policy-container">
//       <div className="policy-image">
//         {/* Replace the placeholder image with the actual image URL */}
//         <img src="https://p1.hiclipart.com/preview/183/446/356/person-logo-user-computer-system-administrator-user-profile-computer-software-computer-monitors-symbol-png-clipart-thumbnail.jpg" alt="Policy" />
//       </div>
//       <div className="policy-details">
//         <h2>Policy Name:</h2>
//         <p>Policy No: </p>
//         <p>Company: </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
//           risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
//           ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
//           massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
//           nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
//           sit amet erat.
//         </p>
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default FullPolicy;



import React from 'react';
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import UserNavbar from './OrgNavbar';
import Footer from './Footer';

const FullPolicy = () => {
  return (
    <>
      <UserNavbar/>

      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Box
          maxW="xl"
          w="100%"
          p={8}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg={useColorModeValue("white", "gray.700")}
        >
          <Flex align="center" justify="center" mb={4}>
            <Image
              src="https://p1.hiclipart.com/preview/183/446/356/person-logo-user-computer-system-administrator-user-profile-computer-software-computer-monitors-symbol-png-clipart-thumbnail.jpg"
              alt="Policy"
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
            />
          </Flex>
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>Policy Name:</Heading>
            <Text>Policy No:</Text>
            <Text>Company:</Text>
          </Box>
          <Text mt={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
            massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
            nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
            sit amet erat.
          </Text>
        </Box>
      </Flex>
      <Footer/>
    </>
  );
};

export default FullPolicy;
