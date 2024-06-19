import './ProfileCard.css';

const ProfileCard=({name,profilePicture,moreInfo})=>{
    return(
        <div className='ProfileCard'>
        <h2 className='h2'>Hello my name is  {name}</h2>
        <img className='pic' src = {profilePicture} alt = {name}/>
        <p className='age'>I am {moreInfo.age}</p>
        <p className='bio'>{moreInfo.bio}</p>
        </div>
    )
}

export default ProfileCard;