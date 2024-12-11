import Milestone from "./Milestones"
import ProjectName from "./ProjectName"
import RecentProjects from "./RecentProjects"
import WelcomeCard from "./WelcomCard"

function ContractorBody(){
    return <div className="bg-white m-[28px] p-[15px] rounded-3xl flex">
        <div className="max-w-[500px]">
            <WelcomeCard />
            <ProjectName />
            <RecentProjects />
        </div>
        <div>
            <Milestone />
        </div>
    </div>
}

export default ContractorBody