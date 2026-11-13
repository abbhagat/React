export const NameList = () => {

  const names = ["Bruce", "Clark", "Diana", "Barry", "Arthur"]

  const nameList = names.map((name, index) => <div key={index}>{index}-{name}</div>)

  return (
    <>
      <h2>Name List</h2>
        <ul>
          {nameList.map((item) => (
            <li>
              {item}
            </li>
          ))}
        </ul>
    </>
  )
}
