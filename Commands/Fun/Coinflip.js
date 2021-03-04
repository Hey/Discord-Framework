module.exports.config = {
    name: 'coinflip',
    aliases: ['flip', 'coin', 'heads', 'tails'],
    description: 'Flips a coin',
};

module.exports.run = (client, msg) => {

    // Flip a random coin
    const outcomes = ['heads', 'tails'];
    const flip = outcomes[Math.round(Math.random())];

    // Sends result
    msg.channel.send(`:coin: Flipped a coin! Got **${flip}**`); 

};
