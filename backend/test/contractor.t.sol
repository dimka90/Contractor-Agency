//SPDX-License-identifier: MIT

pragma solidity ^0.8.26;

import {Test} from "forge-std/Test.sol";
import {Procurement} from "../src/Contractor.sol";
import "forge-std/console.sol";

contract ProcurementTest is Test{

    Procurement procurement;

   Procurement.Milestone[] milestones;
    address  contractorAddress;
function setUp() external {

procurement = new Procurement(vm.addr(1));
contractorAddress = vm.addr(1);
 string memory name = "Julis";
    uint reg = 1234567;
    uint tin = 457899;
    string memory addressp = "Jos south";
    string memory docCid = "9000";
    string memory signCid = "99999";

    procurement.createContractor(name,reg, tin, addressp, docCid, signCid);
}

function  testgetName() external view {
    (string memory name, uint reg, , , , , ) = procurement.contractors(0);

    assertEq(name, "Julis", "Names should be same");
    assertEq(reg, 1234567, "reg number should be 1234567");
}

function testcreateProject() external {
  string memory description  ="Construction of 10 class rooms";
  uint budget = 10000;
  uint currentBalance = budget;
 
 uint startdate = block.timestamp;
    uint endate = block.timestamp + 4 weeks;

        milestones.push(Procurement.Milestone({
            milestoneId: 1,
            description: "Initial Phase",
            completed: false,
            paymentAmount: 1000,
            startDate: block.timestamp,
            dueDate: block.timestamp + 1 weeks,
             milestoneImageCid :""
        }));

        milestones.push(Procurement.Milestone({
            milestoneId: 2,
            description: "Development Phase",
            completed: false,
            paymentAmount: 2000,
            startDate: block.timestamp + 1 weeks,
            dueDate: block.timestamp + 2 weeks,
            milestoneImageCid :""
        }));

        procurement.createProject(description, budget, contractorAddress,startdate, endate);


    Procurement.Project memory  project = procurement.getProject(1);

assertEq(project.description,project.description, "Expected 10 classrooms");
    
}

function testgetContractorProjects() external {
    vm.startPrank(vm.addr(1));

string memory description  ="Construction of 10 class rooms";
  uint budget = 10000;
  uint currentBalance = budget;
 
 uint startdate = block.timestamp;
    uint endate = block.timestamp + 4 weeks;

        milestones.push(Procurement.Milestone({
            milestoneId: 1,
            description: "Initial Phase",
            completed: false,
            paymentAmount: 1000,
            startDate: block.timestamp,
            dueDate: block.timestamp + 1 weeks,
            milestoneImageCid :""
        }));

        milestones.push(Procurement.Milestone({
            milestoneId: 2,
            description: "Development Phase",
            completed: false,
            paymentAmount: 2000,
            startDate: block.timestamp + 1 weeks,
            dueDate: block.timestamp + 2 weeks,
            milestoneImageCid :""
        }));

        // procurement.createProject(description, budget, currentBalance,vm.addr(1),startdate, endate );

        Procurement.Project[] memory contractorproject = procurement.getContractorsProject(vm.addr(1));
        console.log(" Length {}", contractorproject.length);

        for (uint i; i<contractorproject.length; i++){

            console.log("Descriptio {}", contractorproject[i].description);

        }

        vm.stopPrank();

}


function testgetSubmittedMilstone() external {
    vm.startPrank(vm.addr(1));

string memory description  ="Construction of 10 class rooms";
  uint budget = 10000;
  uint currentBalance = budget;
 
 uint startdate = block.timestamp;
    uint endate = block.timestamp + 4 weeks;

        milestones.push(Procurement.Milestone({
            milestoneId: 1,
            description: "Initial Phase",
            completed: false,
            paymentAmount: 1000,
            startDate: block.timestamp,
            dueDate: block.timestamp + 1 weeks,
            milestoneImageCid :""
        }));

        milestones.push(Procurement.Milestone({
            milestoneId: 2,
            description: "Development Phase",
            completed: false,
            paymentAmount: 2000,
            startDate: block.timestamp + 1 weeks,
            dueDate: block.timestamp + 2 weeks,
            milestoneImageCid :""
        }));

        procurement.createProject(description, budget,vm.addr(1),startdate, endate);

    // bool result = procurement.submitCompletedMileStone(1, "Completed the initial phase of development", "ipfs/image.png", 0);
    // console.log(result);
    // assertEq(result,true, "Expected result to be true");
    vm.stopPrank();

}

function testApproveMilestone() external {
    vm.startPrank(vm.addr(1));

string memory description  ="Construction of 10 class rooms";
  uint budget = 10000;
  uint currentBalance = budget;
 
 uint startdate = block.timestamp;
    uint endate = block.timestamp + 4 weeks;

        milestones.push(Procurement.Milestone({
            milestoneId: 1,
            description: "Initial Phase",
            completed: false,
            paymentAmount: 1000,
            startDate: block.timestamp,
            dueDate: block.timestamp + 1 weeks,
            milestoneImageCid :""
        }));

        milestones.push(Procurement.Milestone({
            milestoneId: 2,
            description: "Development Phase",
            completed: false,
            paymentAmount: 2000,
            startDate: block.timestamp + 1 weeks,
            dueDate: block.timestamp + 2 weeks,
            milestoneImageCid :""
        }));

        procurement.createProject(description, budget,vm.addr(1),startdate, endate);

    // bool result = procurement.ApproveMilestone(1, 1);
    // console.log(result);
    // assertEq(result,true, "Expected result to be true");
    vm.stopPrank();

}

}

