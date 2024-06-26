import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";

// import { selectFavorites } from "../../redux/selectors";
// import {
//   addFavorite,
//   removeFavorite,
// } from "../../redux/favorite/favoriteSlice";

// import { FiHeart } from "react-icons/fi";
import {
  CardImage,
  CardInfoContainer,
  FavoriteButton,
  HeartDel,
  ImageContainer,
  InfoList,
  InfoListItem,
  InfoListItemContent,
  InfoParagraph,
  InfoSection,
  LanguageList,
  PricePerHour,
  ReviewComment,
  ReviewContainer,
  ReviewList,
  ReviewRating,
  ReviewerAvatar,
  ReviewerInfo,
  StyledBookTrialButton,
  StyledButton,
  StyledDiv,
  StyledLevelsList,
  StyledLevelsListItem,
  StyledList,
  StyledListItem,
  StyledParagraph,
  StyledSpan,
  TeacherName,
} from "./Card.styled";
import SvgWrapper from "../svg/SvgWrapper";
import { toast } from "react-toastify";
import Modal from "../modal/Modal";
import BookingTrial from "../bookingTrial/BookingTrial";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorites/favoritesSlice";

const Card = ({ teacher, authUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedTeacherId, setExpandedTeacherId] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(teacher.id);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleBookTrialClick = (teacher) => {
    setSelectedTeacher(teacher);
    toggleModal();
  };

  const close = () => {
    setIsModalOpen(false);
  };

  const handleReadMoreClick = (teacherId) => {
    setExpandedTeacherId((prevId) => (prevId === teacherId ? null : teacherId));
  };

  const getButtonText = (teacherId) =>
    expandedTeacherId === teacherId ? "Hide more" : "Read More";

  const onSwitchFavorite = () => {
    if (!authUser) {
      toast.error("You should be logged in for this feature");
      return;
    }
    if (isFavorite) {
      dispatch(removeFavorite(teacher.id));
      toast.success("Teacher removed from favorites successfully");
    } else {
      dispatch(addFavorite(teacher.id));
      toast.success("Teacher added to favorites successfully");
    }
  };

  return (
    <>
      <ImageContainer>
        <CardImage
          src={teacher.avatar_url}
          loading="lazy"
          alt="avatar"
          width="96"
          height="96"
        />
      </ImageContainer>
      <CardInfoContainer>
        <InfoSection>
          <InfoParagraph>Languages</InfoParagraph>
          <InfoList>
            <InfoListItem>
              <InfoListItemContent>
                {" "}
                <SvgWrapper id="opened-book" /> Lessons online
              </InfoListItemContent>
            </InfoListItem>
            <InfoListItem>Lessons done: {teacher.lessons_done}</InfoListItem>
            <InfoListItem>
              <InfoListItemContent>
                {" "}
                <SvgWrapper id="star" /> Rating: {teacher.rating}
              </InfoListItemContent>
            </InfoListItem>
            <InfoListItem>
              Price / 1 hour:{" "}
              <PricePerHour>{teacher.price_per_hour}$</PricePerHour>
            </InfoListItem>
            <li>
              {" "}
              {authUser && isFavorite ? (
                <FavoriteButton type="button" onClick={onSwitchFavorite}>
                  <SvgWrapper id="yellow-heart" />
                </FavoriteButton>
              ) : (
                <FavoriteButton type="button" onClick={onSwitchFavorite}>
                  {" "}
                  <SvgWrapper id="transparent-heart" />
                </FavoriteButton>
              )}
            </li>
          </InfoList>
        </InfoSection>

        <TeacherName>
          {" "}
          {teacher.name} {teacher.surname}{" "}
        </TeacherName>
        <StyledList>
          <StyledListItem>
            <StyledDiv>
              <StyledSpan>Speaks: &nbsp;</StyledSpan>
              <LanguageList>
                {teacher.languages ? (
                  teacher.languages.map((language, index, array) => (
                    <React.Fragment key={language}>
                      <li>{language}</li>
                      {index < array.length - 1 && <span>, &nbsp;</span>}
                    </React.Fragment>
                  ))
                ) : (
                  <li>No languages available</li>
                )}
              </LanguageList>
            </StyledDiv>
          </StyledListItem>
          <StyledListItem>
            <StyledSpan>Lesson info:</StyledSpan> {teacher.lesson_info}
          </StyledListItem>
          <StyledListItem>
            <StyledSpan>Conditions:</StyledSpan> {teacher.conditions}
          </StyledListItem>
        </StyledList>
        {expandedTeacherId === teacher.id && (
          <div>
            <StyledParagraph>{teacher.experience}</StyledParagraph>
            <ReviewList>
              {teacher.reviews ? (
                teacher.reviews.map((review, index) => (
                  <li key={index}>
                    <ReviewContainer>
                      <ReviewerAvatar
                        src={`https://picsum.photos/seed/${Math.random()}/200`}
                        alt="avatar"
                        width="44"
                        height="44"
                        loading="lazy"
                      />
                      <ReviewerInfo>
                        <p>{review.reviewer_name}</p>
                        <ReviewRating>
                          <SvgWrapper id="star" />
                          <p> {review.reviewer_rating}</p>
                        </ReviewRating>
                      </ReviewerInfo>
                    </ReviewContainer>
                    <ReviewComment>{review.comment}</ReviewComment>
                  </li>
                ))
              ) : (
                <li>There are no reviews yet</li>
              )}
            </ReviewList>
          </div>
        )}
        <StyledButton onClick={() => handleReadMoreClick(teacher.id)}>
          {" "}
          {getButtonText(teacher.id)}
        </StyledButton>
        <StyledLevelsList>
          {teacher.levels ? (
            teacher.levels.map((level, index) => (
              <StyledLevelsListItem key={index}>
                <p>{level}</p>
              </StyledLevelsListItem>
            ))
          ) : (
            <li>No levels</li>
          )}
        </StyledLevelsList>
        {expandedTeacherId === teacher.id && (
          <StyledBookTrialButton
            type="button"
            onClick={() => handleBookTrialClick(teacher)}
          >
            Book trial lesson
          </StyledBookTrialButton>
        )}
      </CardInfoContainer>
      {isModalOpen && selectedTeacher && (
        <Modal closeModal={close}>
          <BookingTrial teacher={selectedTeacher} close={close} />
        </Modal>
      )}
    </>
  );
};

export default Card;
