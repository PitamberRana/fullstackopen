const Notification = ({ msg, classStatus }) => {
  if (msg === null) {
    return null;
  }
  return (
    <div>
      <h2 className={classStatus === "notify" ? "notify" : "delete"}>
        {" "}
        {msg}{" "}
      </h2>
    </div>
  );
};
export default Notification;
