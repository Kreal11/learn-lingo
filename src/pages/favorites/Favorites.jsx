import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/cardList/CardList";
import { FavoritesContainer, FavoritesRoot, Text } from "./Favorites.styles";
import { LoadMoreButton } from "../teachers/Teachers.styled";

const Favorites = ({ authUser }) => {
  const favoriteList = useSelector((state) => state.favorite.favorite);
  const [loadedTeachersCount, setLoadedTeachersCount] = useState(4);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const storedTeachers = localStorage.getItem("teachers");
    if (storedTeachers) {
      const parsedTeachers = JSON.parse(storedTeachers);
      setTeachers(parsedTeachers);
    }
  }, []);

  const favoriteTeachers =
    teachers?.length > 0
      ? teachers?.filter((teacher) => favoriteList?.includes(teacher.id))
      : [];

  const noFavoriteTeachers = !favoriteTeachers || favoriteTeachers.length === 0;

  const handleLoadMore = () => {
    setLoadedTeachersCount((prevCount) => prevCount + 4);
  };

  return (
    <FavoritesRoot>
      <FavoritesContainer>
        {noFavoriteTeachers && (
          <Text>You haven`t added any teachers to your favorites yet</Text>
        )}
        {favoriteTeachers.length > 0 && (
          <>
            <CardList
              teachers={favoriteTeachers.slice(0, loadedTeachersCount)}
              authUser={authUser}
            />
            {favoriteTeachers.length > loadedTeachersCount && (
              <LoadMoreButton onClick={handleLoadMore}>
                Load more
              </LoadMoreButton>
            )}
          </>
        )}
      </FavoritesContainer>
    </FavoritesRoot>
  );
};

export default Favorites;
