export const WagmiAbi = [{"type":"constructor","inputs":[{"name":"_tokenAddress","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"function","name":"RejectMilestones","inputs":[{"name":"_milestoneId","type":"uint256","internalType":"uint256"},{"name":"_projectId","type":"uint256","internalType":"uint256"},{"name":"contractorAddress","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"SubmitProject","inputs":[{"name":"_projectId","type":"uint256","internalType":"uint256"},{"name":"projectDescription","type":"string","internalType":"string"},{"name":"imgCid","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"agencyContractor","inputs":[{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"agency_Contractor","inputs":[{"name":"agency","type":"address","internalType":"address"}],"outputs":[{"name":"contractor","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"contractor","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"companyName","type":"string","internalType":"string"},{"name":"registrationNumber","type":"uint256","internalType":"uint256"},{"name":"taxIdenticationNumber","type":"uint256","internalType":"uint256"},{"name":"physicalAddress","type":"string","internalType":"string"},{"name":"owner","type":"address","internalType":"address"},{"name":"addressImageCid","type":"string","internalType":"string"},{"name":"companyUploadedCid","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"contractorProjects","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"contractors","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"companyName","type":"string","internalType":"string"},{"name":"registrationNumber","type":"uint256","internalType":"uint256"},{"name":"taxIdenticationNumber","type":"uint256","internalType":"uint256"},{"name":"physicalAddress","type":"string","internalType":"string"},{"name":"owner","type":"address","internalType":"address"},{"name":"addressImageCid","type":"string","internalType":"string"},{"name":"companyUploadedCid","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"createAgency","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"createContractor","inputs":[{"name":"_companyName","type":"string","internalType":"string"},{"name":"_registrationNumber","type":"uint256","internalType":"uint256"},{"name":"_taxIdenticationNumber","type":"uint256","internalType":"uint256"},{"name":"_physicalAddress","type":"string","internalType":"string"},{"name":"_addressImageCid","type":"string","internalType":"string"},{"name":"_companyUploadedCid","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"createProject","inputs":[{"name":"_description","type":"string","internalType":"string"},{"name":"_budget","type":"uint256","internalType":"uint256"},{"name":"_contractorAddress","type":"address","internalType":"address"},{"name":"_startdate","type":"uint256","internalType":"uint256"},{"name":"_endate","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getAllContractors","inputs":[],"outputs":[{"name":"","type":"tuple[]","internalType":"struct Procurement.Contractor[]","components":[{"name":"companyName","type":"string","internalType":"string"},{"name":"registrationNumber","type":"uint256","internalType":"uint256"},{"name":"taxIdenticationNumber","type":"uint256","internalType":"uint256"},{"name":"physicalAddress","type":"string","internalType":"string"},{"name":"owner","type":"address","internalType":"address"},{"name":"addressImageCid","type":"string","internalType":"string"},{"name":"companyUploadedCid","type":"string","internalType":"string"}]}],"stateMutability":"view"},{"type":"function","name":"getContractor","inputs":[{"name":"_contractorAddress","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple","internalType":"struct Procurement.Contractor","components":[{"name":"companyName","type":"string","internalType":"string"},{"name":"registrationNumber","type":"uint256","internalType":"uint256"},{"name":"taxIdenticationNumber","type":"uint256","internalType":"uint256"},{"name":"physicalAddress","type":"string","internalType":"string"},{"name":"owner","type":"address","internalType":"address"},{"name":"addressImageCid","type":"string","internalType":"string"},{"name":"companyUploadedCid","type":"string","internalType":"string"}]}],"stateMutability":"view"},{"type":"function","name":"getContractorsProject","inputs":[{"name":"_address","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct Procurement.Project[]","components":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"description","type":"string","internalType":"string"},{"name":"budget","type":"uint256","internalType":"uint256"},{"name":"contractorAddress","type":"address","internalType":"address"},{"name":"completed","type":"bool","internalType":"bool"},{"name":"startDate","type":"uint256","internalType":"uint256"},{"name":"endDate","type":"uint256","internalType":"uint256"},{"name":"imageCid","type":"string","internalType":"string"}]}],"stateMutability":"view"},{"type":"function","name":"getProject","inputs":[{"name":"_projectId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"tuple","internalType":"struct Procurement.Project","components":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"description","type":"string","internalType":"string"},{"name":"budget","type":"uint256","internalType":"uint256"},{"name":"contractorAddress","type":"address","internalType":"address"},{"name":"completed","type":"bool","internalType":"bool"},{"name":"startDate","type":"uint256","internalType":"uint256"},{"name":"endDate","type":"uint256","internalType":"uint256"},{"name":"imageCid","type":"string","internalType":"string"}]}],"stateMutability":"view"},{"type":"function","name":"getRejectedProject","inputs":[{"name":"_contractorAddress","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct Procurement.RejectedMileStone[]","components":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"milestoneId","type":"uint256","internalType":"uint256"},{"name":"contractor","type":"address","internalType":"address"}]}],"stateMutability":"view"},{"type":"function","name":"getSubmittedProject","inputs":[{"name":"contractOwner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct Procurement.Project[]","components":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"description","type":"string","internalType":"string"},{"name":"budget","type":"uint256","internalType":"uint256"},{"name":"contractorAddress","type":"address","internalType":"address"},{"name":"completed","type":"bool","internalType":"bool"},{"name":"startDate","type":"uint256","internalType":"uint256"},{"name":"endDate","type":"uint256","internalType":"uint256"},{"name":"imageCid","type":"string","internalType":"string"}]}],"stateMutability":"view"},{"type":"function","name":"milestoneSubmitted","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"milestoneId","type":"uint256","internalType":"uint256"},{"name":"contractor","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"projects","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"description","type":"string","internalType":"string"},{"name":"budget","type":"uint256","internalType":"uint256"},{"name":"contractorAddress","type":"address","internalType":"address"},{"name":"completed","type":"bool","internalType":"bool"},{"name":"startDate","type":"uint256","internalType":"uint256"},{"name":"endDate","type":"uint256","internalType":"uint256"},{"name":"imageCid","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"projectsubmited","inputs":[{"name":"contractor","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"projectsupdate","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"description","type":"string","internalType":"string"},{"name":"budget","type":"uint256","internalType":"uint256"},{"name":"contractorAddress","type":"address","internalType":"address"},{"name":"completed","type":"bool","internalType":"bool"},{"name":"startDate","type":"uint256","internalType":"uint256"},{"name":"endDate","type":"uint256","internalType":"uint256"},{"name":"imageCid","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"rejectedMilestones","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"projectId","type":"uint256","internalType":"uint256"},{"name":"milestoneId","type":"uint256","internalType":"uint256"},{"name":"contractor","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"event","name":"CreateContractor","inputs":[{"name":"","type":"string","indexed":false,"internalType":"string"},{"name":"","type":"address","indexed":false,"internalType":"address"},{"name":"","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"CreateProject","inputs":[{"name":"projectDescription","type":"string","indexed":false,"internalType":"string"},{"name":"projectId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"contractorName","type":"address","indexed":false,"internalType":"address"},{"name":"agencyAddress","type":"address","indexed":false,"internalType":"address"}],"anonymous":false},{"type":"event","name":"SubmitedProject","inputs":[{"name":"projectId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"milestoneDescription","type":"string","indexed":false,"internalType":"string"},{"name":"Imgcid","type":"string","indexed":false,"internalType":"string"},{"name":"contractoraAddress","type":"address","indexed":false,"internalType":"address"}],"anonymous":false}]