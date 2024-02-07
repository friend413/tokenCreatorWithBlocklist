import { FC, useState, useCallback } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { Metadata, PROGRAM_ID } from '@metaplex-foundation/mpl-token-metadata';

export const BlockWallet: FC = () => {
  const { connection } = useConnection();
  const [walletAddress, setWalletAddress] = useState('');
  const [tokenMetadata, setTokenMetadata] = useState(null);
  const [logo, setLogo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const blockWallet = useCallback(
    async (form) => {
      // const tokenMint = new PublicKey(form.walletAddress);
      console.log(form.walletAddress)
      // const metadataPDA = PublicKey.findProgramAddressSync(
			// 	[
			// 		Buffer.from("metadata"),
			// 		PROGRAM_ID.toBuffer(),
			// 		tokenMint.toBuffer(),
			// 	],
			// 	PROGRAM_ID,
			// )[0]
      // console.log(metadataPDA.toBase58());
      // const metadataAccount = await connection.getAccountInfo(metadataPDA);
      // console.log(metadataAccount);
      // const [metadata, _] = await Metadata.deserialize(metadataAccount.data);
      // console.log(metadata);
      // let logoRes = await fetch(metadata.data.uri);
      // let logoJson = await logoRes.json();
      // let { image } = logoJson;
      // setTokenMetadata({ tokenMetadata, ...metadata.data });
      // setLogo(image);
      setLoaded(true);
      setWalletAddress('')
    },
    [walletAddress]
  );

  return (
    <>
      <div className='my-6'>
        <input
          type='text'
          value={walletAddress}
          className='form-control block mb-2 ml-auto mr-auto max-w-800 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='Wallet Address'
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <button
          className='px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...'
          onClick={() => blockWallet({ walletAddress })}>
          <span>ADD to BLOCKLIST</span>
        </button>
      </div>
      <div className='my-6'>
        
      </div>
    </>
  );
};
