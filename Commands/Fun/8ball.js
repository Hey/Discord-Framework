module.exports.config = {
    name: '8ball',
    aliases: ['ball', 'ask'],
    description: 'Takes a question and gives a general answer.',
};

module.exports.run = (client, msg) => {

    // List of possible answers
    const answers = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];

    // Grabs random answer from answers array
    const reply = answers[Math.floor(Math.random() * answers.length)];

    // Sends back answer
    msg.channel.send(reply);

};
