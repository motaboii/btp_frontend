// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import MainNavbar from './MainNavbar'
// import "./RegisterPage.css";
// // import Footer from "./Footer";
// export default function SignUpPage() {
//   const url = "https://misty-ray-threads.cyclic.app/api/v1/auth/register";
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("error");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const signIn = () => {
//     navigate("/login");
//   };

//   const register = async () => {
//     let name = document.querySelector("#name").value;
//     let email = document.querySelector("#Email").value;
//     let password = document.querySelector("#Password").value;
//     let role = "user";
//     let account = "my acoount";

//     try {
//       //   setIsLoading(true);
//       const res = await axios.post(url, {
//         name,
//         role,
//         email,
//         password,
//         account,
//       });
//       signIn();
//     } catch (error) {
//       console.log(error);
//       alert(error.response.data.msg);
//     }
//   };

//   return (
//     <>
//   {/* <MainNavbar/> */}

//     <div className="text-center m-5-auto">
//       <h2>Join us</h2>
//       <h5>Create your personal account</h5>
//       <form>
//         <p>
//           <label>Username</label>
//           <br />
//           <input id="name" type="text" name="first_name" required />
//         </p>
//         <p>
//           <label>Email address</label>
//           <br />
//           <input id="Email" type="email" name="email" required />
//         </p>
//         <p>
//           <label>Password</label>
//           <br />
//           <input id="Password" type="password" name="password" requiredc />
//         </p>
//         <p>
//           <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
//           <span>
//             I agree all statements in{" "}
//             <a
//               href="https://google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               terms of service
//             </a>
//           </span>
//           .
//         </p>
//         <p>
//           <button id="sub_btn" onClick={register}>
//             Register
//           </button>
//         </p>
//       </form>
//       <footer>
//         <p>
//           <Link to="/">Back to Homepage</Link>.
//         </p>
//       </footer>
//     </div>
//     {/* <Footer/> */}
//     </>
//   );
// }


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";

export default function SignUpPage() {
  const url = "https://misty-ray-threads.cyclic.app/api/v1/auth/register";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    navigate("/Registerpage");
  };

  const register = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(url, {
        name,
        email,
        password,
        role: "user",
        account: "my account",
      });
      signIn();
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
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
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Heading fontSize={"4xl"} textAlign="center">
          Join us
        </Heading>
        <Text textAlign="center" mt={2}>
          Create your personal account
        </Text>
        <FormControl mt={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <Checkbox id="checkbox" isRequired>
            <span>
              I agree all statements in{" "}
              <Link href="https://google.com" target="_blank" color="blue.400">
                terms of service
              </Link>
              .
            </span>
          </Checkbox>
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText="Registering"
          colorScheme="green"
          mt={6}
          onClick={register}
          w="100%"
        >
          Register
        </Button>
        <Text textAlign="center" mt={4}>
          <Link to="/">Back to Homepage</Link>.
        </Text>
      </Box>
    </Flex>
  );
}
