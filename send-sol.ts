import "dotenv/config";
import { airdropIfRequired, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";
import { createMemoInstruction } from "@solana/spl-memo";

const sender = getKeypairFromEnvironment("SECRET2");
const connection = new Connection(clusterApiUrl("devnet"));

const lamports = 1 * (10 ** 8); // 0.1 SOL
const address = new PublicKey('Er3D3PiF5AACSadkF7kubm8GjAzAkE8rNMJLox6NgxvH')

const balance = await connection.getBalance(sender.publicKey);
console.log('Checking balance of address:', address.toBase58(), 'Balance:', balance);
console.log('Sending from address:', sender.publicKey.toBase58());
console.log('Sending to address:', address.toBase58());

const transaction = new Transaction()

const sendInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: address,
    lamports: lamports,
});
transaction.add(sendInstruction);

const memoInstruction = createMemoInstruction('Hello from me!');
transaction.add(memoInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);

console.log('Transaction sent with signature:', signature);