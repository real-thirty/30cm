interface props {
  price: number;
}

export function ProductDiscountPrice({ price }: props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>나의 가격</p>
      </div>
      <div>
        {/* To Do: 할인율 추가 후 변경 */}
        <p>10,000원</p>
      </div>
    </div>
  );
}
