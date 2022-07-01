// console.log("Node is working")
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let addreses = [
        "",
        "",
        "",
];

const leafNodes = addreses.map(addr => keccak256(addr));
console.log(leafNodes);
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

// console.log(leafNodes);
// console.log(merkleTree);

const rootHash = merkleTree.getRoot();
console.log("addreses Merkle Tree\n", merkleTree.toString());
console.log("Root Hash: ",rootHash);

// console.log("leafNodes: ", leafNodes[0]);
const claminingAddr = leafNodes[0];
// const claminingAddr = keccak256("0xff287115fd2545e238F33cef4D5C050B615761Aw");
for (let i = 0; i < leafNodes.length; i++){

    const hexProof = merkleTree.getHexProof(leafNodes[i]);
    console.log(`leafNodes${i}: `,hexProof)

}
// const hexProof = merkleTree.getHexProof(claminingAddr);
// console.log(hexProof)




// console.log(merkleTree.verify(hexProof, claminingAddr, rootHash));