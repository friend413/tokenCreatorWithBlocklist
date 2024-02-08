# Solana Token Creator with Blockist

## Wallent Connect

You can use 'set wallet' button to select wallet type and 'connect' button to connect to selected wallet.
We recommend 'Solflare Wallet'.

And then you need to save your secret key as utf8 int array into 'public/secretKey.json'.

## Creating a Token

You need to airdrop sol at 'Token Creator' page using 'Airdrop 1' button to deploy your token to devenet and submit transactions.

And then you can create your token with your specific info.

## Confirming Token

You can confirm token with any transaction( ex. transfer )

## Block List 

You need to fill 2 inputs at 'Block Wallet' page.

First input is 'Wallet Address' to block. so you can fill it with some wallet address of dangerous man.
Second input is 'Token Address' of created token by yourself. so you can fill it with token address just created at 'Token Creator' page and you can get the address at 'https://explorer.solana.com/address'.

## Upload Token Metadata

You can upload your metadata for token to online server with some pay at 'Upload Metadata' page.

First, you need to connect devnet using 'Select Network' dropdown list and 'Connect' button.
Second, you need to upload your logo image for token and then you will be received a url of uploaded image.
Third, you need to make a metadata file using image url and other info, and then you can upload the metadata.

metadata file ex.
  {
    "name": "A test token",
    "symbol": "TEST",
    "description": "Fully for testing purposes only",
    "image": "https://token-creator-lac.vercel.app/token_image.png"
  }

## Update Token Metadata

You can update your token metadata at 'Update Metadata' page.

Enjoy your new token!
