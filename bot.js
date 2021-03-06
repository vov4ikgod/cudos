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

๐น Token
https://coinmarketcap.com/currencies/cudos/
Cudo has its own ERC-20 token and a soon to be launched native coin based on the Cosmos ecosystem, CUDOS*. It powers the blockchain part of the network and allows all participants to stake and earn rewards and discounts.
* Weโre the first Cosmos ecosystem blockchain to natively support the commonly used ERC721, 1559 and 1159 which are all types of  NFTs that run on Ethereum based chains.

`));

bot.hears('documents', (ctx) => ctx.reply(`
DOCUMENTS

Download:
๐น Lite Paper - https://www.cudos.org/wp-content/uploads/2021/11/cudos-lite-paper.pdf
๐น White Paper - https://www.cudos.org/wp-content/uploads/2021/11/cudos-white-paper.pdf
๐น Tech Paper - https://www.cudos.org/wp-content/uploads/2021/11/cudos-white-paper.pdf
๐น One Pager - https://www.cudos.org/wp-content/uploads/2021/11/cudos-white-paper.pdf
`));

bot.hears('partners', (ctx) => ctx.reply(`
PARTNERS

๐น Dotmoovs
๐น MytCoinTainer
๐น Magic
๐น Staked
๐น Shyft
๐น THG Hosting
๐น Animoca Brands
๐น Kylin
๐น GD10 VENTURES
๐น Gather
๐น Blendergrid
๐น HYDRO66
๐น Kings Distributed System
๐น ULTRA
๐น AMDA
๐น Aigorand
`));


bot.hears('node', (ctx) => ctx.reply(`
NODE

Cudos Validator Nodes (CVNs)
CVNs are the backbone of the CUDOS network. Initially, weโll support a maximum of 100 service providers, with a maximum of 1,000 CVNs.
Each node needs to stake 2,000,000 CUDOS to become a CVN. The first batch of validators has hardware boxes approved by Cudo.
This ensures that the specs allow all the intended work to run smoothly and get rewarded.
The work and rewards include:

๐น 24x7 revenue provided from the layer 3 cloud side
๐น Revenue from completed blockchain compute jobs through the CUDOS network
๐น Staking rewards for the contribution to the network
๐น Discounts on the fees paid

Download:
๐น Windows - https://www.cudominer.com/
๐น Linux - https://www.cudominer.com/
๐น macOS - https://www.cudominer.com/
๐น CLI - https://www.cudominer.com/
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

๐น Telegram - https://t.me/cudostelegram
๐น Discord - https://www.cudos.org/blog/
๐น Twitter - https://twitter.com/CUDOS_
๐น GitHub - https://github.com/CudoVentures/cudos-eth-token-contract
๐น Linkedin - https://www.linkedin.com/company/cudos1/
๐น Youtube - https://www.youtube.com/channel/UCbS48Q09D5xMDCVX0T_OeCw
๐น Medium - https://medium.com/cudos
๐น Website - https://www.cudos.org/
๐น Blog - https://www.cudos.org/blog/
`));

bot.hears('roadmap', (ctx) => ctx.reply(`
Roadmap

Progress to Date
๐น Monetisation app, based on Blockchain workloads
๐น Infrastructure management platform
๐น Cudos blockchain โ Testnet
๐น Compute alpha
๐น 500,000 users signed up
๐น 50,000 nodes
๐น Users in 150+ countries
๐น 22,000 developers signed up
๐น Partnerships with Major global providers



H1 2022
๐น v1 Cudos Network Launch
๐น The first 30 Validators live
๐น ERC20 Token Migration
๐น Exchange Listings for Native CUDOS
๐น Native CUDOS staking/delegation
๐น Turing-complete Smart Contract support
๐น Cudos โBlastโ developer SDK
๐น Native NFT account-based support
๐น Ethereum โ Cudos Gravity Bridge
๐น Cosmos IBC Bridge to Osmosis DEX
๐น Eco-system Grants Programme
๐น Transaction Multi-send DApp



Q3 2022
๐น Distributed Compute (Beta)
๐น Multi-signature Wallet
๐น Launchpad Go-Live
๐น Native NFT collections
๐น ERC20 Bridge extension
๐น NFT extension

Q4 2022
๐น Solidity compiler PoC for Cudos VM
๐น Cudos Wallet
๐น Validator decentralisation
๐น Interchain IBC account support
๐น Native CUDOS vesting tools
๐น We also have a list of features that weโll be working on in the future โ that weโre about to begin prioritising:
๐น On-chain Compute
๐น Hardware Encryption support
๐น Compute Oracles
๐น 100+ Validator pool
๐น Additional wallet integrations
๐น Multichain asset bridging
๐น New L1 bridges
๐น Permissionless Orchestrators
๐น Secure Random Number Generator
๐น P2E Games
๐น Tokenized Renewable Energy Mining
`));




bot.on('sticker', (ctx) => ctx.reply('๐๐ผ'));

bot.hears('hi', (ctx) => ctx.reply(`๐ค๐ผ`));
bot.hears('Hi', (ctx) => ctx.reply(`๐ค๐ผ`));
bot.hears('hello', (ctx) => ctx.reply(`๐ค๐ผ`));
bot.hears('Hello', (ctx) => ctx.reply(`๐ค๐ผ`));

bot.hears('How are you?', (ctx) => ctx.reply(`I'm fine๐`));
bot.hears('how are you?', (ctx) => ctx.reply(`I'm fine๐`));

bot.hears('Thank', (ctx) => ctx.reply(`You are very welcome๐`));
bot.hears('thank', (ctx) => ctx.reply(`You are very welcome๐`));
bot.hears('Thanks', (ctx) => ctx.reply(`You are very welcome๐`));
bot.hears('thanks', (ctx) => ctx.reply(`You are very welcome๐`));

bot.hears('Goodbye', (ctx) => ctx.reply(`๐๐ผ`));
bot.hears('goodbye', (ctx) => ctx.reply(`๐๐ผ`));
bot.hears('Bye', (ctx) => ctx.reply(`๐๐ผ`));
bot.hears('bye', (ctx) => ctx.reply(`๐๐ผ`));

bot.launch();
