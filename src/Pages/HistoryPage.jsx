import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { HistoryCard } from "../Components/historyCard";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/footer";
export const HistoryPage = () => {
  const { REACT_APP_URL } = process.env;
  let [data, setData] = useState([]);
  let token = JSON.parse(localStorage.getItem("token"));
  let getData = () => {
    axios
      .get(`https://powerful-erin-gazelle.cyclic.app/history`, { headers: { Authorization: token } })
      .then((res) => {
        // console.log(res)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(data)
  return (
    <>
      <Navbar />
      <Box w={["90%", "", "80%", "70%"]} ml={["5%", "", "10%", "15%"]}>
        <Box mt={["30px"]}>
          <Text
            fontSize={["27px", "", "35px", "35px"]}
            fontWeight={["500"]}
            textAlign={["left"]}
          >
            Your Order History
          </Text>
        </Box>
        <Box>
          {data && data.map((item) => <HistoryCard key={item.id} {...item} />)}
        </Box>
      </Box>
      <Footer />
    </>
  );
};
