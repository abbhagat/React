export const UserDetails = ({name, isOnline, hideOffline}) => {
  if(hideOffline && !isOnline) {
    return null
  }
  return (
    <>
      <h3>{name}</h3>
      <span>{isOnline ? '🟢Online' : '⚪ Offline'}</span>
      <p>{isOnline ? 'Available for chat' : 'Not Available'} </p>
      <p>{isOnline ? <button>Start Chat</button> : <button disabled>Start Chat</button>}</p>
    </>
  )
}
