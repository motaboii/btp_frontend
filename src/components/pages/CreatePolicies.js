// import React, { useState } from 'react';
// import './CreatePolicy.css';
// // import OrgNavbar from './OrgNavbar';
// // import Footer from './Footer';

// const CreatePolicy = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     policyName: '',
//     policyId: '',
//   });
//   const [submittedDataList, setSubmittedDataList] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic to handle form submission here
//     console.log('Form data submitted:', formData);

//     // Create a copy of the submitted data list and add the new data
//     setSubmittedDataList([...submittedDataList, formData]);

//     // Reset form fields after submission
//     setFormData({
//       companyName: '',
//       policyName: '',
//       policyId: '',
//     });
//   };

//   return (
//     <>

// {/* <OrgNavbar/> */}
//     <div className="create-policy-container">
//     <br/>
//     <h2 style={{ fontWeight: 'bold' ,marginLeft:'50px'}}>Create Policy</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="form-group2">
//           <label htmlFor="companyName">Company Name:</label>
//           <input
//             type="text"
//             id="companyName"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="policyName">Policy Name:</label>
//           <input
//             type="text"
//             id="policyName"
//             name="policyName"
//             value={formData.policyName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="policyId">Policy ID:</label>
//           <input
//             type="text"
//             id="policyId"
//             name="policyId"
//             value={formData.policyId}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {submittedDataList.map((submittedData, index) => (
//         <div key={index} className="submitted-card">
//           <h3>Created Policy {index + 1}</h3>
//           <p>Company Name: {submittedData.companyName}</p>
//           <p>Policy Name: {submittedData.policyName}</p>
//           <p>Policy ID: {submittedData.policyId}</p>
//         </div>
//       ))}
//     </div>
//     <br/>
    
//     <br/>
    
//     <br/>
//     {/* <Footer/> */}
//     </>
//   );
// };

// export default CreatePolicy;


import React, { useState } from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Button, Heading, useColorModeValue, Center } from "@chakra-ui/react";

const CreatePolicy = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    policyName: '',
    policyId: '',
  });
  const [submittedDataList, setSubmittedDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmittedDataList([...submittedDataList, formData]);
    setFormData({
      companyName: '',
      policyName: '',
      policyId: '',
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        rounded={"lg"}
        minW={"30vw"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Heading as="h2" fontSize={"xl"} mb={4} textAlign="center">Create Policy</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="companyName" mb={4}>
            <FormLabel>Company Name:</FormLabel>
            <Input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="policyName" mb={4}>
            <FormLabel>Policy Name:</FormLabel>
            <Input
              type="text"
              name="policyName"
              value={formData.policyName}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="policyId" mb={4}>
            <FormLabel>Policy ID:</FormLabel>
            <Input
              type="text"
              name="policyId"
              value={formData.policyId}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="amountCovered" mb={4}>
            <FormLabel>Amount Covered:</FormLabel>
            <Input
              type="number"
              name="Amount Covered"
              value={formData.amountCovered}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Center><Button type="submit" colorScheme="blue">Submit</Button></Center>
        </form>
        <Box 
        height={"auto"}
        width={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}>
                {submittedDataList.map((submittedData, index) => (
          <Box key={index} p={4} mt={4} borderRadius="md">
            <Heading as="h3" fontSize="lg">Created Policy {index + 1}</Heading>
            <p>Company Name: {submittedData.companyName}</p>
            <p>Policy Name: {submittedData.policyName}</p>
            <p>Policy ID: {submittedData.policyId}</p>
            {/* <p>Policy ID: {submittedData.amountCovered}</p> */}
          </Box>
        ))}

        </Box>
      </Box>
    </Flex>
  );
};

export default CreatePolicy;


