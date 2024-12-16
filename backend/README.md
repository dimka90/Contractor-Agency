## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```

forge verify-contract 0xabDe84F6FfC9f44C978bD9dA76319316EeeA01BB src/Contractor.so
l:Procurement --chain 4202 --watch --verifier blockscout --verifier-url https://sepolia-blockscout.lisk.com/api
Start verifying contract `0xabDe84F6FfC9f44C978bD9dA76319316EeeA01BB` deployed on 4202

Submitting verification for [src/Contractor.sol:Procurement] 0xabDe84F6FfC9f44C978bD9dA76319316EeeA01BB.
Submitted contract for verification:
        Response: `OK`
        GUID: `abde84f6ffc9f44c978bd9da76319316eeea01bb675ab7bc`
        URL: https://sepolia-blockscout.lisk.com/address/0xabde84f6ffc9f44c978bd9da76319316eeea01bb
Contract verification status:
Response: `OK`
Details: `Pending in queue`
Contract verification status:
Response: `OK`
Details: `Pass - Verified`
Contract successfully verified

update(v2)

Submitting verification for [src/Contractor.sol:Procurement] 0xc48cb09fdddf80E04476C1ECC393DA5706Da8501.
Submitted contract for verification:
        Response: `OK`
        GUID: `c48cb09fdddf80e04476c1ecc393da5706da8501675fae49`
        URL: https://sepolia-blockscout.lisk.com/address/0xc48cb09fdddf80e04476c1ecc393da5706da8501


update(v3)


ubmitting verification for [src/Contractor.sol:Procurement] 0xF5D1863c6b954C407090B48dbaf60f24f9a8B213.
Submitted contract for verification:
        Response: `OK`
        GUID: `f5d1863c6b954c407090b48dbaf60f24f9a8b21367603dbe`
        URL: https://sepolia-blockscout.lisk.com/address/0xf5d1863c6b954c407090b48dbaf60f24f9a8b213
Contract verification status:
Response: `OK`
Details: `Pending in queue`
Contract verification status:
Response: `OK`
Details: `Pass - Verified`
Contract successfully verified