import React, { useCallback, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import MagicGrid from "react-magic-grid";
import styled from "styled-components";
import { Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  IMG_LIST_REQUEST,
  IMG_UPLOAD_REQUEST,
  CREATE_MODAL_TOGGLE,
} from "../reducers/portfoilo";
import { saveAs } from "file-saver";

const CreateBtn = styled(Button)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const SaveButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  right: 5px;

  display: none;
`;

const PreviewBox = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const RednerBox = styled.div`
  width: calc(100% / 8);
  margin: 2px;
  border-radius: 10px;
  height: ${(props) => props.height || "200px"};
  min-height: 200px;

  box-shadow: 0px 0px 5px #ccc;

  transition: 0.4s;
  cursor: pointer;

  position: relative;

  &:hover {
    opacity: 0.5;
  }

  &:hover ${SaveButton} {
    display: flex;
  }
`;

const RenderImg = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;

  object-fit: cover;
  border-radius: 10px;
`;

const Home = () => {
  const dispatch = useDispatch();

  const fileRef = useRef();

  const { imgs, createModal, previewPath } = useSelector(
    (state) => state.portfolio
  );

  useEffect(() => {
    dispatch({
      type: IMG_LIST_REQUEST,
    });
  }, []);

  const createModalToggle = useCallback(() => {
    dispatch({
      type: CREATE_MODAL_TOGGLE,
    });
  }, [createModal]);

  const uploadBtnClick = useCallback(() => {
    fileRef.current.click();
  });

  const fileChangeHandler = useCallback(
    (e) => {
      const currentFile = e.target.files[0];

      const formData = new FormData();
      formData.append("img", currentFile);

      dispatch({
        type: IMG_UPLOAD_REQUEST,
        data: formData,
      });
    },
    [fileRef.current]
  );

  const saveHandler = useCallback(async (data) => {
    let blob = await fetch(data.fileURL).then((res) => res.blob());

    const file = new Blob([blob]);

    saveAs(file, data.filename);
  }, []);

  return (
    <Layout>
      {imgs.length === 0 ? null : (
        <MagicGrid items={imgs.length}>
          {imgs.map((item) => {
            const randomHeight = Math.floor(Math.random() * 400) + "px";

            return (
              <RednerBox height={randomHeight} key={item.id}>
                <RenderImg src={item.fileURL} alt="image" />
                <SaveButton type="primary" onClick={() => saveHandler(item)}>
                  save
                </SaveButton>
              </RednerBox>
            );
          })}
        </MagicGrid>
      )}
      <CreateBtn type="primary" onClick={createModalToggle}>
        이미지 등록
      </CreateBtn>

      <Modal
        title="새로운 이미지 생성"
        visible={createModal}
        footer={null}
        onCancel={createModalToggle}
        width={1100}
      >
        {previewPath && <PreviewBox src={previewPath} />}
        <input
          type="file"
          name="img"
          hidden
          ref={fileRef}
          onChange={fileChangeHandler}
        />
        <Button size="small" type="primary" onClick={uploadBtnClick}>
          이미지 업로드
        </Button>
      </Modal>
    </Layout>
  );
};

export default Home;
