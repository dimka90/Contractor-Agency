// import Meeting from "./Meetings"
// import Milestone from "./Milestones"
// import ProjectName from "./ProjectName"
// import RecentProjects from "./RecentProjects"
// import WelcomeCard from "./WelcomCard"
import Meeting from "../components/Meetings"
import ProjectName from "../components/ProjectName"
import Milestone from "../components/Milestones"
import RecentProjects from "../components/RecentProjects"

function AgencyDashboard(){
    return <div className="bg-white rounded-3xl flex gap-4 ">
        <div className="w-[75%] p-[15px]">
            {/* <WelcomeCard /> */}
            <ProjectName />
            <ProjectName />
            <RecentProjects />
        </div>
        <div className=" bg-[#F4F4F4] p-[15px] rounded-r-3xl flex flex-col gap-6">
            <Milestone />
            <Meeting />
        </div>
    </div>
}

export default AgencyDashboard;