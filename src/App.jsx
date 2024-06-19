import './App.css'
import ProfileCard from './Components/ProfileCard'


function App() {
  const name =`Mikaela Kamunya`
  const profilePicture = './assets/mikaela.jpg'
  const moreInfo = {
    age: '23 years old',
    bio:'I am a software engineering student at Teach2give. I am passionate about technology '
  }

  const name2 =`Truphena Abere`
  const profilePicture2 = './assets/truphena.jpg'
  const moreInfo2 = {
    age: '21 years old',
    bio:'I am a computer science student at Dedan Kimathi University . I am love programming '
  }

  const name3 =`Mark Gatere`
  const profilePicture3 = './assets/gatere.jpg'
  const moreInfo3 = {
    age: '22 years old',
    bio:'I am a meta dev at Microsoft. I am passionate about AI and Machine Learning '
  }

  const name4 =`Harun Mbaabu`
  const profilePicture4 = './assets/harun.jpg'
  const moreInfo4 = {
    age: '30 years old',
    bio:'I am a data engineer. I am Building my own company '
 
  }

  return (
    <div className='container'>
           <ProfileCard name={name} profilePicture={profilePicture} moreInfo={moreInfo}/> 
            <ProfileCard name={name2} profilePicture={profilePicture2} moreInfo={moreInfo2}/>
            <ProfileCard name={name3} profilePicture={profilePicture3} moreInfo={moreInfo3}/>
            <ProfileCard name={name4} profilePicture={profilePicture4} moreInfo={moreInfo4}/>
    </div>
  )
}

export default App
