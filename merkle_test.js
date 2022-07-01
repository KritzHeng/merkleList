// console.log("Node is working")
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let addreses = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
    "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"
];

const leafNodes = addreses.map(addr => keccak256(addr));
// const rootHash = merkleTree.getRoot();
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
console.log(merkleTree.getHexProof(leafNodes[0]))

// // console.log(leafNodes);
// // console.log(merkleTree);


const rootHash = merkleTree.getRoot();
console.log("addreses Merkle Tree\n", merkleTree.toString());
console.log("Root Hash: ",rootHash);

// // console.log("leafNodes: ", leafNodes[0]);
const claminingAddr = leafNodes[0];
// // const claminingAddr = keccak256("0xff287115fd2545e238F33cef4D5C050B615761Aw");
for (let i = 0; i < leafNodes.length; i++){

    const hexProof = merkleTree.getHexProof(leafNodes[i]);
    console.log(`leafNodes${i}: `,hexProof)

}
const hexProof = merkleTree.getHexProof(claminingAddr);
console.log(hexProof)




// // console.log(merkleTree.verify(hexProof, claminingAddr, rootHash));


