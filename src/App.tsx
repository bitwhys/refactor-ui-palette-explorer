import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react'
import Ecommerce from './components/wireframes/Ecommerce'
import { Palette, ShareNetwork, Wrench, Layout, Divide } from 'phosphor-react'
import { FC } from 'react'

const MenuButton = ({ icon: Icon, onClick }) => (
  <IconButton
    icon={<Icon size={20} weight="duotone" />}
    h={8}
    w={8}
    rounded="full"
    borderWidth={'1'}
    aria-label="test"
    onClick={onClick}
  />
)

const SidePanel = ({ onClose, isOpen }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} isFullHeight={false} size="sm">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Type here..." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

interface BottomMenuPopoverProps {
  icon: any
  header: string
  body: any
  variant?: 'solid' | 'ghost'
}
const BottomMenuPopover: FC<BottomMenuPopoverProps> = props => (
  <Popover placement="top-start">
    <PopoverTrigger>
      <IconButton
        icon={<props.icon size={20} weight="duotone" />}
        h={8}
        w={8}
        rounded="full"
        borderWidth={props.variant == 'ghost' ? 0 : '1'}
        aria-label="test"
        variant={props.variant || 'solid'}
      />
    </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>{props.header}</PopoverHeader>
      <PopoverBody>{props.body ? <props.body /> : `Are you sure you want to have that milkshake?`}</PopoverBody>
    </PopoverContent>
  </Popover>
)
const defaultPalettes = [
  { color: '#1708FF' },
  { color: '#000000' },
  { color: '#FFFFFF' },
  { color: '#FFC300' },
  { color: '#FF4F00' },
  { color: '#EA00FA' },
  { color: '#00F5FF' },
]

const ColorBox = ({}) => <Box h={8} w={8} bg="gray.400" borderWidth={1} />
const Palettes: FC<{ palettes: Array<typeof defaultPalettes> }> = ({ palettes }) => {
  return (
    <Grid autoColumns="minmax(0,1fr)" autoRows="minmax(0,1fr)" gap={3} autoFlow="column">
      {defaultPalettes.map(palette => (
        <ColorBox />
      ))}
    </Grid>
  )
}
const App = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box h="100vh" alignItems="center" position="relative">
      <Box mb={32} />
      <Container position="relative" maxW="container.xl">
        <Box as="main" py={10}>
          <Box mx="auto" maxW="7xl" px={{ sm: 6, lg: 8 }}>
            <Box mx="auto" maxW="7xl" px={{ sm: 6, lg: 8 }}>
              {/* Replace with your content */}
              <Grid
                templateRows="var(--wireframe-viewport-header-height) calc(var(--wireframe-viewport-height) - var(--wireframe-viewport-header-height))"
                rounded="3xl"
                border={2}
                borderStyle="solid"
                borderColor="gray.200"
                bg="white"
              >
                <HStack flexShrink={0} spacing={8} borderBottom={2} borderStyle="solid" px={6} borderColor="gray.200">
                  <HStack h="full">
                    <Box h={3} w={3} rounded="full" bg="red.400" />
                    <Box h={3} w={3} rounded="full" bg="yellow.400" />
                    <Box h={3} w={3} rounded="full" bg="green.400" />
                  </HStack>
                </HStack>
                <Flex
                  p={4}
                  justifyContent="center"
                  borderBottomRightRadius="3xl"
                  borderBottomLeftRadius="3xl"
                  bg="gray.50"
                >
                  <Ecommerce />
                </Flex>
              </Grid>
              {/* /End replace */}
            </Box>
          </Box>
        </Box>
        <HStack
          justify="space-between"
          p={2}
          borderWidth={2}
          bg="white"
          shadow="lg"
          rounded="full"
          position="absolute"
          bottom="-68px"
          left="calc(50% - calc(196px / 2))"
        >
          <HStack>
            <MenuButton icon={Palette} onClick={onOpen} />
            <MenuButton icon={ShareNetwork} onClick={onOpen} />
            <MenuButton icon={Layout} onClick={onOpen} />
          </HStack>
          <Divider orientation="vertical" h="100%" />
          <BottomMenuPopover icon={Wrench} header="Settings" variant="ghost" />
        </HStack>
      </Container>
      <SidePanel isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
export default App
