
//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


//address - 0x3B5DB65B9052363B129913733e471F82EFC8309B

contract Portfolio {

    struct Project{
        uint256 id;
        string name;
        string description;
        string image;
        string githubLink;
        string webpageLink;
    }

    struct Certificate{
        uint256 id;
        string link;
        string subject;
        string platform;
    }

    Project[5] public projects;
    Certificate[5] public certificates;
    
    string public imageLink = "QmQGD7aYo85UWdWHEyqFBhBwUmtJfB1TnwB6JAG1pKugDT";
    string public description = "over 6 months of practical experience with a good knowledge in blockchain development. I help web3 community by contributing in the web3 space";
    string public resumeLink = "Will add in future";
    uint256 projectCount;
    uint256 certificateCount;
    address public Owner;
    string public emptyString;
    address public constant SEPOLIA_ETHERSCAN_ADDRESS = 0x77a53df86A91E0D5Fdc10aB4c43De0e7b88EF2f1;

    constructor() {
        Owner = msg.sender;
    }

    // Only Owner
    modifier onlyOwner(){
        require(Owner==msg.sender, "You are not the Owner of this Profile");
        _;
    }

    //Projects

    function insertProject(string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink, string calldata _webpageLink) public onlyOwner{
        projects[projectCount] = Project(projectCount, _name, _description, _image, _githubLink, _webpageLink);
        projectCount++;
    }

    function changeProject(uint256 _projectCount, string calldata _name, string calldata _description, string calldata _image, string calldata _githubLink, string calldata _webpageLink) external onlyOwner {
        require(_projectCount >= 0 && _projectCount <= projectCount,"Invalid Project Number");
        projects[_projectCount] = Project(_projectCount, _name, _description, _image, _githubLink, _webpageLink);
    }

    function allProjects() external view returns (Project[5] memory) {
        return projects;
    }

    //Certificate

    function insertCertificate(string calldata _link, string calldata _subject, string calldata _platform) external onlyOwner {
        certificates[certificateCount] = Certificate(certificateCount, _link, _subject, _platform);
        certificateCount++;
        }

    function changeCertificate(uint256 _certificateCount, string calldata _link, string calldata _subject, string calldata _platform) external onlyOwner{
        require(_certificateCount >= 0 && _certificateCount <= certificateCount,"Invalid Certificate Number");
        certificates[_certificateCount] = Certificate(_certificateCount, _link, _subject, _platform);
    }

    function allCertificate() external view returns (Certificate[5] memory) {
        return certificates;
    }

    //Profile Picture

    function changeProfilePicture(string calldata _imageLink) external onlyOwner{
        imageLink = _imageLink;
    }

    //description

    function changeDescription(string calldata _description) external onlyOwner{
        description = _description;
    }



    //ResumeLink

    function changeResumeLink(string calldata _resumeLink) external onlyOwner {
        resumeLink = _resumeLink;
    }

    //Donate address

    function donate() public payable {
        payable(Owner).transfer(msg.value);
    }
}

