export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(sendId) {
    sender = sendId;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messenger = createMessenger();

messenger.sendMessage('Bob');
messenger.setMessage('Good Job');
messenger.sendMessage('Bob');
messenger.setSender('Gromcode');
messenger.sendMessage('Bob');
