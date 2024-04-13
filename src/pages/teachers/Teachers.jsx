import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { dbase } from "../../firebaseConfig";

const Teachers = () => {
  const [teachers, setTeachers] = useState(null);
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

  return <div>Teachers</div>;
};

export default Teachers;
