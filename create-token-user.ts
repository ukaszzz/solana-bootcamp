import { createMint, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import "dotenv/config"
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));


const mintAutority = getKeypairFromEnvironment("SECRET2");
const mint = new PublicKey("Ba1UAMDZHB1WHKw2dt1EnTwYowMdCDisKaYbJzswv2DL")
const recipient = new PublicKey("Er3D3PiF5AACSadkF7kubm8GjAzAkE8rNMJLox6NgxvH")
const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    mintAutority,
    mint,
    recipient
)

const link = getExplorerLink("address", tokenAccount.address.toString(), "devnet")

console.log(link);
