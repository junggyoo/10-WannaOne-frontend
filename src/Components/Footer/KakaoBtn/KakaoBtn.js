import React from "react";
import "./KakaoBtn.scss";

function KakaoBtn({ color, background }) {
  return (
    <button className="kakaoBtn" style={{ color, background }}>
      <svg width="18" height="18" viewBox="0 0 24 24">
        <path
          fill="#1b1c1d"
          d="M12 4c-4.97 0-9 3.185-9 7.115 0 2.557 1.707 4.8 4.27 6.054-.188.702-.682 2.545-.78 2.94-.123.49.178.483.376.351.155-.103 2.466-1.675 3.464-2.353.541.08 1.1.123 1.67.123 4.97 0 9-3.186 9-7.115C21 7.185 16.97 4 12 4"
        ></path>
      </svg>
      문의하기
    </button>
  );
}

export default KakaoBtn;