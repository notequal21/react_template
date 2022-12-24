export const ImgWebp = ({ usemap, srcWebp, src2x, src }: any) => {
  return (
    <picture>
      <source srcSet={srcWebp} type={"image/webp"} />
      <source srcSet={`${src} 1x, ${src2x} 2x`} />
      <img useMap={usemap} src={src} alt="" />
    </picture>
  );
};
