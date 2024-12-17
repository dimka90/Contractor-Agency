export const WagmiAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "CreateContractor",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "projectDescription",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "contractorName",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "agencyAddress",
                "type": "address"
            }
        ],
        "name": "CreateProject",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "milestoneDescription",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "milestoneId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "contractoraAddress",
                "type": "address"
            }
        ],
        "name": "SubmitedMileStone",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_milestoneId",
                "type": "uint256"
            }
        ],
        "name": "ApproveMilestone",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_milestoneId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "contractorAddress",
                "type": "address"
            }
        ],
        "name": "RejectMilestones",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "agencyContractor",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "contractor",
        "outputs": [
            {
                "internalType": "string",
                "name": "companyName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "registrationNumber",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "taxIdenticationNumber",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "physicalAddress",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "addressImageCid",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "companyUploadedCid",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "contractorProjects",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "contractors",
        "outputs": [
            {
                "internalType": "string",
                "name": "companyName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "registrationNumber",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "taxIdenticationNumber",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "physicalAddress",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "addressImageCid",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "companyUploadedCid",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "createAgency",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_companyName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_registrationNumber",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_taxIdenticationNumber",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_physicalAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_addressImageCid",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_companyUploadedCid",
                "type": "string"
            }
        ],
        "name": "createContractor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_budget",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_currentBalance",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_contractorAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_startdate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endate",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "milestoneId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "completed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "paymentAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dueDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "milestoneImageCid",
                        "type": "string"
                    }
                ],
                "internalType": "struct Procurement.Milestone[]",
                "name": "_milestones",
                "type": "tuple[]"
            }
        ],
        "name": "createProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllContractors",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "companyName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "registrationNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "taxIdenticationNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "physicalAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "addressImageCid",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "companyUploadedCid",
                        "type": "string"
                    }
                ],
                "internalType": "struct Procurement.Contractor[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_contractorAddress",
                "type": "address"
            }
        ],
        "name": "getContractor",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "companyName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "registrationNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "taxIdenticationNumber",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "physicalAddress",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "addressImageCid",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "companyUploadedCid",
                        "type": "string"
                    }
                ],
                "internalType": "struct Procurement.Contractor",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getContractorsProject",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "budget",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "contractorAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "completed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endDate",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "milestoneId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "internalType": "bool",
                                "name": "completed",
                                "type": "bool"
                            },
                            {
                                "internalType": "uint256",
                                "name": "paymentAmount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "dueDate",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "startDate",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "milestoneImageCid",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct Procurement.Milestone[]",
                        "name": "mileStone",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct Procurement.Project[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "getProject",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "budget",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentBalance",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "contractorAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "completed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endDate",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "milestoneId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "internalType": "bool",
                                "name": "completed",
                                "type": "bool"
                            },
                            {
                                "internalType": "uint256",
                                "name": "paymentAmount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "dueDate",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "startDate",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "milestoneImageCid",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct Procurement.Milestone[]",
                        "name": "mileStone",
                        "type": "tuple[]"
                    }
                ],
                "internalType": "struct Procurement.Project",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            }
        ],
        "name": "getProjectMillstones",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "milestoneId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "completed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "paymentAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dueDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "milestoneImageCid",
                        "type": "string"
                    }
                ],
                "internalType": "struct Procurement.Milestone[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_contractorAddress",
                "type": "address"
            }
        ],
        "name": "getRejectedProject",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "projectId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "milestoneId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "contractor",
                        "type": "address"
                    }
                ],
                "internalType": "struct Procurement.RejectedMileStone[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getsubmittedMilestone",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "milestoneId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "completed",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "paymentAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dueDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "milestoneImageCid",
                        "type": "string"
                    }
                ],
                "internalType": "struct Procurement.Milestone[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "milestoneSubmitted",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "milestoneId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "contractor",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "projectMilestones",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "milestoneId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "completed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "paymentAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dueDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "milestoneImageCid",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "projects",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "budget",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentBalance",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "contractorAddress",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "completed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endDate",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "projectsubmited",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "rejectedMilestones",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "projectId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "milestoneId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "contractor",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_projectId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_milestoneDescription",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_mileStoneImagecid",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_milestoneId",
                "type": "uint256"
            }
        ],
        "name": "submitCompletedMileStone",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]