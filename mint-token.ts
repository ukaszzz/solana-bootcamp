import { createMint, getOrCreateAssociatedTokenAccount, mintTo } from "@solana/spl-token";
import "dotenv/config"
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const HOW_MANY_CENTS = 100;

const connection = new Connection(clusterApiUrl("devnet"));
const mintAutority = getKeypairFromEnvironment("SECRET2");
const mint = new PublicKey("Ba1UAMDZHB1WHKw2dt1EnTwYowMdCDisKaYbJzswv2DL")
const recipient = new PublicKey("ArWmZv3TmvUxEUfYfJ1c1cyaVCWf5axAxf6dUXnak1Tx")
const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    mintAutority,
    mint,
    recipient
)

const transaction = await mintTo(
    connection, mintAutority, mint, tokenAccount.address, mintAutority.publicKey, 7 * HOW_MANY_CENTS
)

const link = getExplorerLink("address", tokenAccount.address.toString(), "devnet")

console.log(link);
console.log(transaction);
