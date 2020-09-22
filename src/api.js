import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:8000');
// function subscribeToTimer(cb) {
//   socket.on('timer', (timestamp) => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }
// export { subscribeToTimer };

const socket = openSocket('http://13.233.142.241:8080/get');
function subscribeToSocket(cb) {
  console.log('subscribeToSocket function called');

  socket.on('reply', function (msg) {
    console.log('socket reply', msg);
    cb(msg);
  });

  socket.emit('stream', {
    posterName: 'poster1.jpg',
    videoUrl:
      'https://video.kumuapi.com/7e281f6fc840acb18cbee58e17f5372c_C5E4524D4BE099BD18736E1A95F625FA.m3u8',
  });
}
export { subscribeToSocket };
