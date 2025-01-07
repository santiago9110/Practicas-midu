import "./twiterFollowCard.css"
export const TwiterFollowCard = ({children,username,isFollowing}) => {
  return (
   <>
   
   <article className='te-follow-avatar'>
    <header className='tw-follow-header'>

        <img 
        className="tw-follow-avatar"
        alt="" 
        src={`https://unavatar.io/${username}`} 
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
    </header>

<aside>
  <button className='tw-followCard-button'>
    seguir
  </button>
</aside>
   </article>
   </>
  )
}
