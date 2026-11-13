import "/src/css/Alert.css";

export const Alert = ({children, type = "success"}) => {
  return (
    <>
      <div className={`alert ${type}`}> {children} </div>
    </>
  );
}
