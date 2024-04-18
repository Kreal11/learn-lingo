import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { dbase } from "../../firebaseConfig";
import { Container, LoadMoreButton } from "./Teachers.styled";
import CardList from "../../components/cardList/CardList";

const Teachers = ({ authUser }) => {
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  console.log(teachers);

  useEffect(() => {
    const fetchData = () => {
      const starCountRef = ref(dbase, "/");
      onValue(starCountRef, (snapshot) => {
        const userData = snapshot.val();
        console.log(userData);
        setTeachers(userData);
      });
    };
    fetchData();
  }, []);

  const loadMoreTeachers = () => {
    setVisibleTeachers((prevVisibleTeachers) => prevVisibleTeachers + 4);
  };

  return (
    <Container>
      {/* {loadingState && !errorState && <Loader />} */}
      <CardList
        authUser={authUser}
        teachers={teachers?.slice(0, visibleTeachers)}
      />
      {teachers.length > visibleTeachers && (
        <LoadMoreButton onClick={loadMoreTeachers}>Load More</LoadMoreButton>
      )}
    </Container>
  );
};

export default Teachers;
