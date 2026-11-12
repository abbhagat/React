export const UserDetails = ({name, isOnline, hideOffline, isPremium, isNewUser, role}) => {
  if(hideOffline && !isOnline) {
    return null
  }
  let roleBadge = null;
  if(role === 'admin') {
    roleBadge = '🛡️Admin';
  } else if(role === 'moderator') {
    roleBadge = '🛡️Moderator';
  }else if(role === 'user') {
    roleBadge = '👤User';
  }else {
    roleBadge = '❓Unknown Role';
  }
  return (
    <>
      <h3>
        {name}
        {isPremium && '⭐'}
        {isNewUser && '🆕'}
        {roleBadge}
      </h3>
      <span>{isOnline ? '🟢Online' : '⚪ Offline'}</span>
      <p>{isOnline ? 'Available for chat' : 'Not Available'} </p>
      <p>{isOnline ? <button>Start Chat</button> : <button disabled>Start Chat</button>}</p>
    </>
  )
}
