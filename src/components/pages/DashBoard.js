// import React from "react";
// import { Link } from "react-router-dom";
// import "./DashBoard.css";
// import UserNavbar from "./UserNavbar";
// import Footer from "./Footer";
// import Card from "../utils/Card";
// import { Flex, Heading } from "@chakra-ui/react";

// const policiesData = [
//   {
//     id: 1,
//     policyName: "Policy 1",
//     companyName: "",
//     policyId: "P001",
//   },
//   {
//     id: 2,
//     policyName: "Policy 2",
//     companyName: "Company B",
//     policyId: "P002",
//   },
//   {
//     id: 3,
//     policyName: "Policy 3",
//     companyName: "Company C",
//     policyId: "P003",
//   },
//   {
//     id: 4,
//     policyName: "Policy 4",
//     companyName: "Company D",
//     policyId: "P004",
//   },
//   {
//     id: 5,
//     policyName: "Policy 5",
//     companyName: "Company E",
//     policyId: "P005",
//   },
//   {
//     id: 6,
//     policyName: "Policy 6",
//     companyName: "Company F",
//     policyId: "P006",
//   },
// ];

// const Policies = () => {
//   return (
//     <>
//       <Heading as="h1" size="2xl" textAlign="center" p={4}>
//         Shop Policies
//       </Heading>
//       <Flex
//         wrap="wrap"
//         justifyContent="space-around"
//         alignItems="center"
//         p={4}
//         m={4}
//       >
//         {policiesData.map((policy) => (
//           <Card key={policy.id} policy={policy} />
//         ))}
//       </Flex>
//     </>
//   );
// };

// export default Policies;



// import React from 'react';
// import {
//   Box,
//   Stack,
//   HStack,
//   Heading,
//   Text,
//   VStack,
//   useColorModeValue,
//   List,
//   ListItem,
//   ListIcon,
//   Button,
// } from '@chakra-ui/react'
// import { FaCheckCircle } from 'react-icons/fa'
// import UserNavbar from './OrgNavbar';
// import Footer from './Footer';

// function PriceWrapper(props) {
//   const { children } = props

//   return (
//     <Box
//       mb={4}
//       shadow="base"
//       borderWidth="1px"
//       alignSelf={{ base: 'center', lg: 'flex-start' }}
//       borderColor={useColorModeValue('gray.200', 'gray.500')}
//       borderRadius={'xl'}>
//       {children}
//     </Box>
//   )
// }

// export default function DashBoard() {
//   const bgColor = useColorModeValue('gray.50', 'gray.700');

//   const policiesData = [
    // {
    //   id: 1,
    //   policyName: "Basic Health",
    //   benefits: [
    //     "Coverage for doctor visits, hospital stays, and prescription drugs.",
    //     "Affordable coverage for common healthcare needs.",
    //   ]
    // },
    // {
    //   id: 2,
    //   policyName: "Critical Illness",
    //   benefits: [
    //     "Provides financial protection for serious illnesses like cancer or heart attack.",
    //     "Pays a lump sum benefit upon diagnosis to cover medical expenses and other costs.",
    //   ]
    // },
    // {
    //   id: 3,
    //   policyName: "Maternity Protection",
    //   benefits: [
    //     "Coverage for prenatal, childbirth, and postnatal care.",
    //     "Includes prenatal screenings, delivery expenses, and coverage for pregnancy complications.",
    //   ]
    // }
//   ];

//   return (
//     <>
//       {/* <UserNavbar/> */}
//       <Box py={12}>
//         <VStack spacing={2} textAlign="center">
//           <Heading as="h1" fontSize="4xl">
//             User Groups
//           </Heading>
//           <Text fontSize="lg" color={'gray.500'}>
//             Diverse Users, Organizations Benefiting from Decentralized Application.
//           </Text>
//         </VStack>
//         <Stack
//           direction={{ base: 'column', md: 'row' }}
//           textAlign="center"
//           justify="center"
//           spacing={{ base: 4, lg: 10 }}
//           py={10}>
//           {policiesData.map(policy => (
//             <PriceWrapper key={policy.id} bgColor={bgColor}>
//               <Box py={4} px={12}>
//                 <Text fontWeight="500" fontSize="2xl">
//                   {policy.policyName}
//                 </Text>
//               </Box>
//               <VStack
//                 bg={bgColor}
//                 py={4}
//                 borderBottomRadius={'xl'}>
//                 <List spacing={3} textAlign="start" px={12}>
//                   {policy.benefits.map(benefit => (
//                     <ListItem key={benefit}>
//                       <ListIcon as={FaCheckCircle} color="green.500" />
//                       {benefit}
//                     </ListItem>
//                   ))}
//                 </List>
//                 <Box w="80%" pt={7}>
//                   <Button w="full" colorScheme="green" variant="outline">
//                     Buy
//                   </Button>
//                 </Box>
//               </VStack>
//             </PriceWrapper>
//           ))}
//         </Stack>
//       </Box>
//       {/* <Footer/> */}
//     </>
//   )
// }


import React from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import UserNavbar from './OrgNavbar';
import Footer from './Footer';

function PriceWrapper(props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      m={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
      minW="280px"
      maxW="280px" // Set a minimum width for the card
      h="100%" // Set a fixed height for the card
      display="flex"
      flexDirection="column"
    >
      {children}
    </Box>
  );
}

export default function DashBoard() {
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  const policiesData = [
    {
      id: 1,
      policyName: "Basic Health",
      benefits: [
        "Coverage for doctor visits, hospital stays, and prescription drugs.",
        "Affordable coverage for common healthcare needs.",
      ]
    },
    {
      id: 2,
      policyName: "Critical Illness",
      benefits: [
        "Provides financial protection for serious illnesses like cancer or heart attack.",
        "Pays a lump sum benefit upon diagnosis to cover medical expenses and other costs.",
      ]
    },
    {
      id: 3,
      policyName: "Maternity Protection",
      benefits: [
        "Coverage for prenatal, childbirth, and postnatal care.",
        "Includes prenatal screenings, delivery expenses, and coverage for pregnancy complications.",
      ]
    }
  ];

  return (
    <>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Policies
          </Heading>
          <Text fontSize="lg" color={'gray.500'}>
            Checkout Different policies offered by different companies as per your need.          </Text>
        </VStack>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
          wrap="wrap"
          spacing={4}
          py={10}
        >
          {policiesData.map(policy => (
            <PriceWrapper key={policy.id} bgColor={bgColor}>
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  {policy.policyName}
                </Text>
              </Box>
              <VStack bg={bgColor} py={4} borderBottomRadius={'xl'}>
                <List spacing={3} textAlign="start" px={12}>
                  {policy.benefits.map(benefit => (
                    <ListItem key={benefit}>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      {benefit}
                    </ListItem>
                  ))}
                </List>
                <Box w="80%" pt={7}>
                  <Button w="full" colorScheme="green" variant="outline">
                    Buy Policy
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
          ))}
        </Flex>
      </Box>
      {/* <Footer /> */}
    </>
  );
}

