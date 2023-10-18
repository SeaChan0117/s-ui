import React, { memo } from "react";

interface ShowCotainerProps {
  activeMenu: string;
}

const ShowCotainer = memo((props: ShowCotainerProps) => {

  return (
    <div className="show-container">
      {
        props?.activeMenu
      }
    </div>
  )
});

export default ShowCotainer;