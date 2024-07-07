// SPDX-License-Identifier: MIT
pragma solidity >0.5.0 <0.9.0;

contract Chai{
    struct Memo{ 
        string name;
        string message;
        uint timestamp;
        address from;
    }
    address payable owner= payable (msg.sender);
    Memo[] memos;
    function buyChai (string memory name, string memory message) public payable{
        require(msg.value>0, "Besharam");
        owner.transfer(msg.value);
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }
    function getDetails() public view returns(Memo[] memory){
        return memos;
    }
}