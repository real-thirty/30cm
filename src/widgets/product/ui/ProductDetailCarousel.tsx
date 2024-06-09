import { Carousel, ConfigProvider, Divider, Space } from "antd";
import { useRef } from "react";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";

import { Tables } from "@/shared/models";

interface props {
  images?: Tables<"images">[];
}

export function ProductDetailCarousel({ images }: props) {
  const mainCarouRef = useRef<CarouselRef>(null);

  // To Do : skeleton component
  if (!images) {
    return <div></div>;
  }

  return (
    <Space
      direction="vertical"
      style={{
        width: "500px",
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              arrowSize: 30,
            },
          },
        }}
      >
        <Carousel
          arrows
          ref={mainCarouRef}
          dots={false}
          infinite={true}
          style={{ width: "500px", height: "500px" }}
          draggable={true}
        >
          {images?.map((image) => (
            <Image
              key={image.image_id}
              src={image.image_url ?? ""}
              width={500}
              height={500}
              alt=""
            />
          ))}
        </Carousel>
      </ConfigProvider>
      <Divider style={{ margin: "2px" }} />

      <Carousel
        arrows
        dots={false}
        infinite={images.length > 5 ? true : false}
        slidesToShow={images.length > 5 ? 5 : images.length}
        slidesToScroll={1}
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {...images.map((image, idx) => (
          <Image
            key={image.image_id}
            src={image.image_url ?? ""}
            width={100}
            height={100}
            alt=""
            onClick={() => mainCarouRef.current?.goTo(idx)}
          />
        ))}
      </Carousel>
    </Space>
  );
}
