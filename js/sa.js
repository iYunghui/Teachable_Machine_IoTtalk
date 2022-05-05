document.addEventListener('DOMContentLoaded', () => {
  
    function onConnect() {
      console.log("Connect");
    }

    function DummySensor_I() {
      num = getClass();
      return [num];
    }

    const option = {
      apiUrl: 'https://iottalk2.tw/csm',
      deviceModel: 'Dummy_Device',
      idfList: [[DummySensor_I, ['int']]],
      onConnect: onConnect,
      pushInterval: 1,
      interval: {
        'DummySensor-I': 1,
      },
    };
  
    const da = new iottalkjs.DAI(option);
    da.run();
    
    // function onsignal(object) {
    //     console.log(object);
    // }

    // let client = new iottalkjs.DAN.Client();
    // const option = {
    //   url: 'https://iottalk2.tw/csm',
    //   acceptProtos: ['mqtt'],
    //   idfList: [['DummySensor_I', ['int']]],
    //   onSinal: onsignal,
    //   name: "TM",
    //   profile: {
    //     model: 'Dummy_Device',
    //     u_name: 'TM',
    //   }
    // };

    // client.register(option);
});