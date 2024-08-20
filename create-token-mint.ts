import { createMint } from "@solana/spl-token";
import "dotenv/config"
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));


const user = getKeypairFromEnvironment("SECRET2");

const mint = await createMint(connection, user, user.publicKey, null, 2)

const link = getExplorerLink("address", mint.toString(), "devnet")

console.log(link);
