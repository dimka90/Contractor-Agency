import { useReadContract } from 'wagmi'
import {wagmiContractConfig} from "../lib/wagmiContractConfig";

export default function ReadContract() {
  const { data: contractor} = useReadContract({
    ...wagmiContractConfig,
    functionName: 'getContractor',
    args: ['0x1864cdF30E6B98240e4b3eF88bfF5cD5d5BdEF40'],
  })


  return (
    
    <div>
      Contractor: {contractor ? contractor.companyName : 'Loading...'}
    {console.log(contractor)}
    </div>
    
  );
}