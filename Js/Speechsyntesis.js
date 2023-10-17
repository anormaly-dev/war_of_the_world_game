var speaks = [{
    "name": "Alice",
    "lang": "it-IT"
}];

function Narrator(){
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = "After years of wars the human species has almost disappeard. During this period of totally absence of smart human species, the earth took care of its self and came back to shine. The humans left are around a million and they are divided in three factions, but only two of those have the real power, Nellians and Regionians, which are two criminal organizations. The third and last faction are the Alexians, which even being the majority have not a leader. Your job is to collect as many Alexians to take the control and power from the other two factions, but be careful, Regionians are smart and Nellians Are unpredictable! To get to the next level u must collect 1520 Alexians. Are you ready? With which hero would you like to start your adventure? Elvis or Valentina?";
    const voice = speaks[0];
    speechSynthesis.speak(msg);
}
