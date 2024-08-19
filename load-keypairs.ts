import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment('SECRET2')

console.log(keypair.publicKey)