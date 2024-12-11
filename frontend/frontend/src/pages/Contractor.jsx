import ContractorBody from "../components/ContractorBody";
import SideMenu from "../components/SideMenu";

function Contractor() {
  return (
    <div>
      <div className="flex">
        <SideMenu />
        <div>
          <ContractorBody />
        </div>
      </div>
    </div>
  );
}

export default Contractor;
