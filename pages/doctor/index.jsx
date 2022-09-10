import ProfileCard from '../../components/Cards/ProfileCard'
import DoctorHeader from '../../components/Navigation/DoctorHeader'

export default function DoctorDashboard() {

  return (
    <div className='relative'>
        <DoctorHeader/>
        <div className='flex flex-col pt-24'>
            <ProfileCard />
        </div>
        
     </div>
  )
}
