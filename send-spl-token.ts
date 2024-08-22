import {
    createMint,
    getOrCreateAssociatedTokenAccount,
    transfer,
  } from "@solana/spl-token";
  import "dotenv/config";
  import {
    getKeypairFromEnvironment,
    getExplorerLink,
    airdropIfRequired,
  } from "@solana-developers/helpers";
  import { clusterApiUrl, Connection, Keypair, PublicKey } from "@solana/web3.js";
  
  const connection = new Connection(clusterApiUrl("devnet"));
  const user = getKeypairFromEnvironment("SECRET2");
  
  const mint = new PublicKey("Ba1UAMDZHB1WHKw2dt1EnTwYowMdCDisKaYbJzswv2DL");
  const recipient = new PublicKey("ArWmZv3TmvUxEUfYfJ1c1cyaVCWf5axAxf6dUXnak1Tx");
  
  const userTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    mint,
    user.publicKey
  );
  
  const recipientTokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    mint,
    recipient
  );
  
  const transaction = await transfer(
    connection,
    user,
    userTokenAccount.address,
    recipientTokenAccount.address,
    user.publicKey,
    7 * 100
  );
  
  const link = getExplorerLink("transaction", transaction, "devnet");
  
  console.log(`Explorer link: ${link}`);