import image from "../assets/adobestock_94815939.jpeg";
export function Contact() {
  return (
    <div className="contact w-full h-[90vh] flex">
      <div
        className="leftSide h-full flex-[50%] bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="rightSide h-full flex-[50%] flex flex-col justify-center">
        <h1 className="font-[10] text-[50px] ml-[30px]">Contact Us</h1>
        <form
          className="flex flex-col w-auto h-auto p-[30px]"
          action=""
          id="contact"
        >
          <label className="mt-[15px] text-[grey]" htmlFor="name">
            Full Name
          </label>
          <input
            className="h-[40px] w-[80%]  border-b-[1px] border-b-[#121619] text-black placeholder:font-bold placeholder:text-black focus:outline-none"
            placeholder="Enter full name..."
            type="text"
            name="name"
            id=""
          />
          <label className="mt-[15px] text-[grey]" htmlFor="email">
            Email
          </label>
          <input
            className="h-[40px] w-[80%]  border-b-[1px] border-b-[#121619] text-black placeholder:font-bold placeholder:text-black focus:outline-none"
            placeholder="Enter email..."
            type="email"
            name="email"
            id=""
          />
          <textarea
            className="mt-[15px] h-[70%] w-[80%] border-b-[1px] border-b-[#121619] text-black placeholder:font-bold placeholder:text-black focus:outline-none"
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder="Enter message..."
            required
          ></textarea>
          <button
            className="mt-[40px] w-[140px] h-[40px] border-none bg-[#121619] text-[whitesmoke] text-[15px] cursor-pointer"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
