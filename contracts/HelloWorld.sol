// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HelloWorld {
    //events
    //states
    //functions

    //errors
    error HelloWorld__MessageSendFailed();
    error HelloWorld__NoSuccess();

    event MessageChanged(string oldMsg, string newMsg);

    string public message;

    constructor (string memory firstMessage) {
        message = firstMessage;
    }

    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;

        emit MessageChanged(oldMsg, newMessage);
    }
}