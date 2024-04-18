import Card from "../card/Card";

import { List, ListItem } from "./CardList.styled";

const CardList = ({ authUser, teachers }) => {
  return (
    <List>
      {teachers &&
        Array.isArray(teachers) &&
        teachers.map((teacher) => (
          <ListItem key={teacher?.lessons_done}>
            {teacher && <Card authUser={authUser} teacher={teacher} />}
          </ListItem>
        ))}
    </List>
  );
};

export default CardList;
