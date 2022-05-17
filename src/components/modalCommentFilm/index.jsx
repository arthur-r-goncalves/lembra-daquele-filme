import React, { useEffect, useState } from "react";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import ReactModal from "react-modal";
import { BtnAdd, BtnClose, Image, Infos, modalStyle } from "./style";
import { useCommentModal } from "../../Providers/CommentModalProvider";
import { useCommentary } from "../../Providers/CommentaryProvider";
import { Box, Grid, Rating, Typography } from "@mui/material";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const ModalCommentFilm = () => {
  const { isOpen, toggle, media } = useCommentModal();
  const {
    addComment,
    deleteComment,
    getComments,
    commentsMovie,
  } = useCommentary();
  const [comment, setComment] = useState("");

  const imagePathPrefix = "http://image.tmdb.org/t/p/w500/";
  const handleMedia = () => {
    getComments(media.id);
    console.log(commentsMovie);
  };
  useEffect(() => {
    handleMedia();
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addComment(media.id, comment);
    setComment("");
  };

  return (
    <ReactModal
      style={{ ...modalStyle }}
      isOpen={isOpen}
      onRequestClose={toggle}
      ariaHideApp={false}
    >
      <BtnClose onClick={toggle}>
        <FaTimes />
      </BtnClose>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={imagePathPrefix + media.poster_path} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="space-between"
          flex-direction="column"
        >
          <Infos>
            <Typography variant="h6">{media.title || media.name}</Typography>
            <Typography size={12}>
              <Rating
                sx={{ verticalAlign: "middle" }}
                readOnly
                size="small"
                precision={0.5}
                value={media.vote_average / 2}
                emptyIcon={
                  <StarBorderIcon
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "inherit",
                    }}
                  />
                }
              />
              &nbsp;{media.vote_count} opiniões
            </Typography>
            <form onSubmit={(evt) => handleSubmit(evt)}>
              <div>
                <ul>
                  {commentsMovie.forEach((item) => (
                    <li>{item.message}</li>
                  ))}
                </ul>
              </div>
              <input
                minLength="2"
                value={comment}
                onChange={(evt) => setComment(evt.target.value)}
              />
              <BtnAdd type="submit">Enviar Comentário</BtnAdd>
            </form>
          </Infos>
        </Grid>
      </Grid>
    </ReactModal>
  );
};

export default ModalCommentFilm;