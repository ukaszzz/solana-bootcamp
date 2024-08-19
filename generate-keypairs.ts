import { Keypair } from "@solana/web3.js";
const keypair = Keypair.generate();
import { addKeypairToEnvFile } from "@solana-developers/helpers";

addKeypairToEnvFile(keypair, "SECRET2")

console.log(keypair)