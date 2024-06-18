import { useCallback, useState } from "react";

import { IsHeart } from "@/shared/ui";

interface props {
  productId: number;
}

export function ProductHeart({ productId }: props) {
  // To Do: User 로그인 추가 후 Heart state 수정
  const [isHeart, setIsHeart] = useState(false);

  // To Do: user 로그인 기능 추가 후 heart Click handling 구현
  const handleClickHeart = useCallback(() => {}, []);

  return (
    <div
      style={{
        display: "flex",
        flexShrink: 0,
        justifyContent: "center",
        alignItems: "center",
        width: "85px",
      }}
    >
      <IsHeart isHeart={isHeart} onChange={setIsHeart} />
    </div>
  );
}
