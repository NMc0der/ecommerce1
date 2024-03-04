import backgroundImg from "../assets/HudsonYardsStoreEdits-5.jpg";

export function About() {
  return (
    <div className="about w-full h-[90vh] flex flex-col ">
      <div
        className="aboutTop w-full h-[45%] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      ></div>
      <div className="aboutBottom flex flex-col h-[55%] justify-center items-center mt-[50px]">
        <h1 className="font-normal text-[70px] text-black h-[30px] flex justify-center translate-y-[-145px]">
          ABOUT US
        </h1>
        <p className="w-[1200px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          itaque ipsa dicta veniam ducimus repudiandae sit repellendus officia,
          illo corrupti minus sequi delectus nihil, fuga est dolores alias
          dolorem molestias. Deleniti, ratione voluptas rerum sequi tenetur
          dignissimos fugit sint, quasi beatae ducimus tempore dolor repudiandae
          impedit hic ab esse voluptates iusto itaque? Harum laboriosam fugit
          vero optio recusandae nemo. Voluptatibus. Quae autem labore ipsa
          nostrum, quas amet quo porro, eius quidem itaque nisi deserunt qui
          suscipit eum culpa repellat odio mollitia accusantium rerum placeat.
          In adipisci officia cum dolores nulla. Libero vel consequuntur
          mollitia assumenda magnam autem deleniti officiis nemo? Obcaecati
          voluptate est reprehenderit repellat dolorum dolore eaque amet velit
          recusandae eos provident vitae hic sed dicta, a reiciendis laborum.
        </p>
      </div>
    </div>
  );
}
