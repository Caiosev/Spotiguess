import React from 'react';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

import { useMusicContext } from '../../contexts/MusicContex';
import { StyledInput, StyledWrapperInput } from './Input.style';

export default function Input() {
  const {
    music,
    setIsCorrectSongName,
    setisCorrectArtistName,
    setShowCover,
    isCorrectArtistName,
    isCorrectSongName,
  } = useMusicContext();
  const [inputName, setInputName] = React.useState<string>('');
  const [isCorrectAnwser, setIsCorrectAnswer] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    if (isCorrectSongName && isCorrectArtistName) {
      setShowCover(true);
    }
  }, [isCorrectSongName, isCorrectArtistName]);

  const handleSubmit = () => {
    if (inputName.toLowerCase() === music?.items[0].name.toLowerCase()) {
      setIsCorrectSongName(true);
      setIsCorrectAnswer(true);
    } else if (
      inputName.toLowerCase() === music?.items[0].artists[0].name.toLowerCase()
    ) {
      setisCorrectArtistName(true);
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
    setInputName('');
  };
  return (
    <StyledWrapperInput>
      <StyledInput
        onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : null)}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="Type the song name or artist name"
        value={inputName}
      />
      {isCorrectAnwser !== null && !isCorrectAnwser ? (
        <IoMdClose className="result" size="25px" />
      ) : null}
      {isCorrectAnwser !== null && isCorrectAnwser ? (
        <IoMdCheckmark className="result" size="25px" />
      ) : null}
    </StyledWrapperInput>
  );
}
