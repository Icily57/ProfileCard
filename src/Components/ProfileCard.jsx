

const ProfileCard=({name,profilePicture,moreInfo})=>{
    return(
        <>
        <h2>Hello my name is  {name}</h2>
        <img src = {profilePicture} alt = {name}/>
        <p>I am {moreInfo.age}</p>
        <p>{moreInfo.bio}</p>
        </>
    )
}

export default ProfileCard;