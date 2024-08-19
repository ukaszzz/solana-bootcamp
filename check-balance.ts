import { clusterApiUrl, Connection } from "@solana/web3.js"
import "dotenv/config"
import { airdropIfRequired, getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment('SECRET2');
const connection = new Connection(clusterApiUrl("devnet"));
const adress = keypair.publicKey;
const lamports = 7 * (10 ** 8)

//airdrop 0,7
// await airdropIfRequired(connection, adress, lamports, lamports)

const balance = await connection.getBalance(adress)

console.log(balance);
