import React from "react";
import { Box, Center, Flex, Image, Text, UnorderedList, ListItem, Divider } from "@chakra-ui/react";

const Section_2 = () => {
  return (
    <Box flexGrow={1} pl={40}>
      <Center>
        <Text fontFamily={"sans-serif"} fontSize={"25px"} fontWeight={"bold"}>
          How We Use Your Data
        </Text>
      </Center>
      
      <Flex alignItems={"center"} justifyContent={"space-between"} columnGap={2}>
        <Box>
          <Text fontFamily={"sans-serif"} fontSize={"14px"} fontWeight={"500"} mt={2}>
            We use information we collect solely to provide, improve, and support our services. Specifically, we use your data to:
          </Text>
          <Divider mt={4} mb={15} />
          <UnorderedList
            lineHeight={2}
            fontFamily={"sans-serif"}
            fontSize={"14px"}
            fontWeight={"500"}
          >
            <ListItem>Facilitate one-on-one session bookings.</ListItem>
            <ListItem>Manage and synchronize your bookings with your Google Calendar.</ListItem>
            <ListItem>Send notifications and reminders related to session bookings.</ListItem>
          </UnorderedList>
        </Box>
        <Image
          src="https://img.freepik.com/free-vector/appointment-booking-with-woman-smartphone_23-2148557484.jpg?ga=GA1.1.445490132.1727162141&semt=ais_hybrid"
          boxSize="300px"
          objectFit="cover"
        />
      </Flex>

      <Center mt={10}>
        <Text fontFamily={"sans-serif"} fontSize={"25px"} fontWeight={"bold"}>
          Google Calendar Access
        </Text>
      </Center>
      
      <Flex alignItems={"center"} justifyContent={"space-between"} columnGap={2}>
        <Box>
          <Text fontFamily={"sans-serif"} fontSize={"14px"} fontWeight={"500"} mt={2}>
            When you connect your Google Calendar, we request the minimum necessary permissions required to:
          </Text>
          <Divider mt={4} mb={15} />
          <UnorderedList
            lineHeight={2}
            fontFamily={"sans-serif"}
            fontSize={"14px"}
            fontWeight={"500"}
          >
            <ListItem>View and create events on your behalf.</ListItem>
            <ListItem>
              Display your availability for session bookings. We only access calendar information needed
              to schedule and manage bookings. Your calendar data is used solely for the intended purpose
              of our application and is not shared with any third parties.
            </ListItem>
          </UnorderedList>
        </Box>
        <Image
          src="https://img.freepik.com/free-vector/appointment-booking-smartphone_23-2148559902.jpg?ga=GA1.1.445490132.1727162141&semt=ais_hybrid"
          boxSize="300px"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
};

export default Section_2;
