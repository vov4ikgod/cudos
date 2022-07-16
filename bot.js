const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('5337403107:AAGQ30V5XIhI5Ho9Gi-nHzqZQLqvsk5cUqE');

bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name} ${ctx.message.from.last_name}
This is the fan bot of the CUDOS project. 
Here you can find out everything about the project.
`,      Markup.keyboard([
            ['info', 'offical-link'],
            ['roadmap', 'team'],
            ['partners', 'node'],
            ['documents'],
        ])
        .resize()
    )
);

bot.hears('info', (ctx) => ctx.reply(`
INFO

SUDOS - is a decentralized cloud computing network that combines blockchain and cloud storage using redundant computing resources.

🔹 Token
https://coinmarketcap.com/currencies/cudos/
Cudo has its own ERC-20 token and a soon to be launched native coin based on the Cosmos ecosystem, CUDOS*. It powers the blockchain part of the network and allows all participants to stake and earn rewards and discounts.
* We’re the first Cosmos ecosystem blockchain to natively support the commonly used ERC721, 1559 and 1159 which are all types of  NFTs that run on Ethereum based chains.

`));

bot.hears('documents', (ctx) => ctx.reply(`
DOCUMENTS

Download:
🔹 Lite Paper - https://www.cudos.org/wp-content/uploads/2021/11/cudos-lite-paper.pdf
🔹 White Paper - https://www.cudos.org/wp-content/uploads/2021/11/cudos-white-paper.pdf
🔹 Tech Paper - https://www.cudos.org/wp-content/uploads/2021/11/cudos-white-paper.pdf
🔹 One Pager - https://www.cudos.org/wp-content/uploads/2021/11/cudos-white-paper.pdf
`));

bot.hears('partners', (ctx) => ctx.reply(`
PARTNERS

🔹 Dotmoovs
🔹 MytCoinTainer
🔹 Magic
🔹 Staked
🔹 Shyft
🔹 THG Hosting
🔹 Animoca Brands
🔹 Kylin
🔹 GD10 VENTURES
🔹 Gather
🔹 Blendergrid
🔹 HYDRO66
🔹 Kings Distributed System
🔹 ULTRA
🔹 AMDA
🔹 Aigorand
`));


bot.hears('node', (ctx) => ctx.reply(`
NODE

Cudos Validator Nodes (CVNs)
CVNs are the backbone of the CUDOS network. Initially, we’ll support a maximum of 100 service providers, with a maximum of 1,000 CVNs.
Each node needs to stake 2,000,000 CUDOS to become a CVN. The first batch of validators has hardware boxes approved by Cudo.
This ensures that the specs allow all the intended work to run smoothly and get rewarded.
The work and rewards include:

🔹 24x7 revenue provided from the layer 3 cloud side
🔹 Revenue from completed blockchain compute jobs through the CUDOS network
🔹 Staking rewards for the contribution to the network
🔹 Discounts on the fees paid

Download:
🔹 Windows - https://www.cudominer.com/
🔹 Linux - https://www.cudominer.com/
🔹 macOS - https://www.cudominer.com/
🔹 CLI - https://www.cudominer.com/
`));

bot.hears('team', (ctx) => ctx.reply(`
TEAM

Matt Hawkins
CEO
https://www.linkedin.com/in/mathewhawkins/

David Pugh-Jones
CMO
https://www.linkedin.com/in/davidpughjones/

Andrew Sturmey
CTO
https://www.linkedin.com/in/andrew-sturmey-118913a/

Lee Woodham
COO
https://www.linkedin.com/in/woodham/

Michael Watkins
Director of Product Management
https://www.linkedin.com/in/michael-watkins-80b47a50/?original_referer=https%3A%2F%2Fwww.google.com%2F

Pete Hill
VP of Sales
https://www.linkedin.com/in/petehillcudo/

Nuno Pereira
VP of Partnerships
https://www.linkedin.com/in/nuno-pereira-060a86110/
`));

bot.hears('offical-link', (ctx) => ctx.reply(`
OFFICAL LINK

🔹 Telegram - https://t.me/cudostelegram
🔹 Discord - https://www.cudos.org/blog/
🔹 Twitter - https://twitter.com/CUDOS_
🔹 GitHub - https://github.com/CudoVentures/cudos-eth-token-contract
🔹 Linkedin - https://www.linkedin.com/company/cudos1/
🔹 Youtube - https://www.youtube.com/channel/UCbS48Q09D5xMDCVX0T_OeCw
🔹 Medium - https://medium.com/cudos
🔹 Website - https://www.cudos.org/
🔹 Blog - https://www.cudos.org/blog/
`));

bot.hears('roadmap', (ctx) => ctx.reply(`
Roadmap

Progress to Date
🔹 Monetisation app, based on Blockchain workloads
🔹 Infrastructure management platform
🔹 Cudos blockchain – Testnet
🔹 Compute alpha
🔹 500,000 users signed up
🔹 50,000 nodes
🔹 Users in 150+ countries
🔹 22,000 developers signed up
🔹 Partnerships with Major global providers



H1 2022
🔹 v1 Cudos Network Launch
🔹 The first 30 Validators live
🔹 ERC20 Token Migration
🔹 Exchange Listings for Native CUDOS
🔹 Native CUDOS staking/delegation
🔹 Turing-complete Smart Contract support
🔹 Cudos ‘Blast’ developer SDK
🔹 Native NFT account-based support
🔹 Ethereum ↔ Cudos Gravity Bridge
🔹 Cosmos IBC Bridge to Osmosis DEX
🔹 Eco-system Grants Programme
🔹 Transaction Multi-send DApp



Q3 2022
🔹 Distributed Compute (Beta)
🔹 Multi-signature Wallet
🔹 Launchpad Go-Live
🔹 Native NFT collections
🔹 ERC20 Bridge extension
🔹 NFT extension

Q4 2022
🔹 Solidity compiler PoC for Cudos VM
🔹 Cudos Wallet
🔹 Validator decentralisation
🔹 Interchain IBC account support
🔹 Native CUDOS vesting tools
🔹 We also have a list of features that we’ll be working on in the future – that we’re about to begin prioritising:
🔹 On-chain Compute
🔹 Hardware Encryption support
🔹 Compute Oracles
🔹 100+ Validator pool
🔹 Additional wallet integrations
🔹 Multichain asset bridging
🔹 New L1 bridges
🔹 Permissionless Orchestrators
🔹 Secure Random Number Generator
🔹 P2E Games
🔹 Tokenized Renewable Energy Mining
`));




bot.on('sticker', (ctx) => ctx.reply('👍🏼'));

bot.hears('hi', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('Hi', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('hello', (ctx) => ctx.reply(`🤚🏼`));
bot.hears('Hello', (ctx) => ctx.reply(`🤚🏼`));

bot.hears('How are you?', (ctx) => ctx.reply(`I'm fine😁`));
bot.hears('how are you?', (ctx) => ctx.reply(`I'm fine😁`));

bot.hears('Thank', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('thank', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('Thanks', (ctx) => ctx.reply(`You are very welcome😌`));
bot.hears('thanks', (ctx) => ctx.reply(`You are very welcome😌`));

bot.hears('Goodbye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('goodbye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('Bye', (ctx) => ctx.reply(`👋🏼`));
bot.hears('bye', (ctx) => ctx.reply(`👋🏼`));

bot.launch();
