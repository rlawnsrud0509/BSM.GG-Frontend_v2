import { useState } from "react";

export const useModal = (initialState: boolean) => {
  const [modalState, setModalState] = useState(initialState);
  const [animationState, setAnimationState] = useState(initialState);

  const openModal = () => {
    setAnimationState(true);
    setTimeout(() => {
      setModalState(true);
    }, 400);
  };

  const closeModal = () => {
    setAnimationState(false);
    setTimeout(() => {
      setModalState(false);
    }, 400);
  };

  return { modalState, animationState, openModal, closeModal };
};
