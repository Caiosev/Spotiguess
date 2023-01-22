import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Modal from 'react-modal';

export default function ModalComponent() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  window.addEventListener('load', function () {
    localStorage.getItem('modal');
    if (localStorage.getItem('modal') === 'true') {
      setModalIsOpen(false);
    } else {
      setModalIsOpen(true);
    }
  });

  const handleClose = () => {
    localStorage.setItem('modal', 'true');

    setModalIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} className="modal" overlayClassName="overlayModal">
        <button className="close" onClick={handleClose}>
          ❌
        </button>
        <h2>How to Play</h2>
        <h3>
          A random song will be displayed, with cover art, title and artist name blurred
        </h3>
        <h3>
          You will have three options, the eye (will give you a tip revealing the cover
          and the name of the singer, which can be used a maximum of twice per song), play
          (which will play 30 seconds of the song), and the next button (which will skip
          to the next song not counting the point of your current one)
        </h3>
        <h3>
          You will earn a point for each song name correct, but if you skip the song your
          streak will be lost.
        </h3>
      </Modal>
      <button className="helpBtn" onClick={() => setModalIsOpen(true)}>
        <AiOutlineQuestionCircle color="white" />
      </button>
    </>
  );
}
