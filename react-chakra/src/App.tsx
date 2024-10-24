import { Flex } from "@chakra-ui/react"
import Demo from "./components/ui/mycomp/drawer"
import { Avatar } from "./components/ui/avatar"

function App() {

  return (
    <div>
      <Flex 
        bg={"teal"}
        h = {"60px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
        px={"20px"}
        _hover={{bgColor:"white"}}
        >
          <Demo />
          <Avatar />
      </Flex>
    </div>
  )
}

export default App
