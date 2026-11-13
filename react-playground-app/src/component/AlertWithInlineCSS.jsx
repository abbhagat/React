export const AlertWithInlineCSS = ({children, type = "success"}) => {
  return (
    <>
      <div style={
        {
          padding: "10px",
          backgroundColor: type === "success" ? "green" : "red",
          color: "white",
          borderRadius: "5px",
          marginBottom: "10px"
        }
      }
      >
        {children}
      </div>
    </>
  );
}
