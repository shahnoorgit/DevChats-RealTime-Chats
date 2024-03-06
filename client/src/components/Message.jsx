const Message = () => {
  return (
    <div className=" chat chat-end">
      <div className=" chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?username=shanAdmin"
            alt="User pic"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-sky-500`}>Hi There</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        13:16
      </div>
    </div>
  );
};

export default Message;
